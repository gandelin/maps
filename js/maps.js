var locations= 
    [
      {
        name: "Mount Baker",
        latitude: 48.7767,
        longitude: -121.8144,
        zoom: 0
      },
      {
        name: "Mount Rainier",
        latitude: 46.8523,
        longitude: -121.7603,
        zoom: 0
      },
      {
        name: "Pikes Place Market",
        latitude: 47.6101,
        longitude: -122.3421,
        zoom: 0
      },
      {
        name: "Puyallup Fairgrounds",
        latitude: 47.1823,
        longitude: -122.2968,
        zoom: 0
      },
      {
        name: "Space Needle",
        latitude: 47.6205,
        longitude: -122.3493,
        zoom:  16
      },
      {
        name: "Washington State Capitol Building",
        latitude: 47.0429,
        longitude: -122.8995,
        zoom: 0
      }
    ];

/*
 * Initialize Google Map
 */

/*
 * Update location based upon point of interest
 */
function updateLocation() {
  var locIx = $("#locationSelect").val() - 1;
  $("#latitude").val(locations[locIx].latitude);
  $("#longitude").val(locations[locIx].longitude);
  $("#zoom").val(locations[locIx].zoom);
}

/*
 * Display google map of selected point of interest
 */
var googleMap;
function displayMap() {
  googleMap = new google.maps.Map( $('#google-map')[0] );
  googleMap.setCenter( { lat: 47.6205, lng: -122.3493 } );
  googleMap.setZoom( 16 );
/*  var marker = new google.maps.Marker( {
          position: { lat: 47.6205, lng: -122.3493 }
      } );
  marker.setMap( googleMap );

  var infoWindow = new google.maps.InfoWindow( {
          content: 'The Space Needle'
      } );
  marker.addListener( 'click', function( ) {
          infoWindow.open( googleMap, marker );
      } ); */
}