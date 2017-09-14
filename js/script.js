        var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: {lat: 34.86674, lng: -111.7591218},
          zoom: 11
        });
        var marker = new google.maps.Marker({
          position: {lat: 34.8693056, lng: -111.761122},
          map: map
        });
      }
