var get_location = function() {
    var geolocation = null;
    var c_pos = null;

    if (window.navigator && window.navigator.geolocation) {
        geolocation = window.navigator.geolocation;

        var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000, // 10 seconds
            maximumAge: 30 * 1000 // 30 seconds
        };

        function success(position) {
            console.log(position);
            c_pos = position.coords;
            mapboxgl.accessToken = 'pk.eyJ1Ijoic3NhcmFuZ2kxMjMiLCJhIjoiY2ltOWpmeno4MDNwNHRubTZobW50Y2ljZiJ9.yidy_pQjADEQ8vD7j_m1hw';
            if (!mapboxgl.supported()) {
                alert('Your browser does not support Mapbox GL');
            } else {
                var map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/bright-v8', //stylesheet location
                    center: [c_pos.longitude, c_pos.latitude], // starting position
                    zoom: 12 // starting zoom
                });
            }
        }

        function error(positionError) {
            console.log(positionError.message);
        }

        if (geolocation) {
            geolocation.getCurrentPosition(success, error, positionOptions);
        }

    } else {
        alert("Getting Geolocation is prevented on your browser");
    }

    return c_pos;
}