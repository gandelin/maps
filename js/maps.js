var googleMap;
var selectedName;
var locations= 
    [
      {
        name: "Mount Baker",
        latitude: 48.7767,
        longitude: -121.8144,
        zoom: 10
      },
      {
        name: "Mount Rainier",
        latitude: 46.8523,
        longitude: -121.7603,
        zoom: 10
      },
      {
        name: "Pikes Place Market",
        latitude: 47.6101,
        longitude: -122.3421,
        zoom: 15
      },
      {
        name: "Puyallup Fairgrounds",
        latitude: 47.1823,
        longitude: -122.2968,
        zoom: 16
      },
      {
        name: "Space Needle",
        latitude: 47.6205,
        longitude: -122.3493,
        zoom:  16
      },
      {
        name: "Washington State Capitol",
        latitude: 47.0429,
        longitude: -122.8995,
        zoom: 14
      }
    ];

/*
 * Initialize Google Map with default setting
 */
$(document).ready(function() { 
  updateLocation();
});

/*
 * Update location based upon point of interest
 */
function updateLocation() {
  var locIx = $("#locationSelect").val() - 1;
  $("#latitude").val(locations[locIx].latitude);
  $("#longitude").val(locations[locIx].longitude);
  $("#zoom").val(locations[locIx].zoom);
  selectedName = locations[locIx].name;
}

function getCenter() {
  var center = {};
  center.lat = parseFloat($("#latitude").val());
  center.lng = parseFloat($("#longitude").val());
  return center;
}

function getZoom() {
  return parseInt($("#zoom").val());
}

/*
 * Display google map of selected point of interest
 */
function displayMap(e) {
  e.preventDefault();
  var ctr = getCenter();
  var z = getZoom();
  googleMap = new google.maps.Map(document.getElementById('mymap'), {
          center: ctr,
          zoom: z
        });
  var marker = new google.maps.Marker( {
    position: ctr
  });
  
  marker.setMap(googleMap);

  var infoWindow = new google.maps.InfoWindow( {
    content: selectedName
  });

  marker.addListener( 'click', function() {
    infoWindow.open(googleMap, marker)
  });
}