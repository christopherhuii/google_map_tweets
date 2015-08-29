var markers = []

$(function() {
  $('#search-button').on('click', function() {
    var location = $('#zip_code').val();
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: "/?utf8=✓&zip_code=" + location + "&commit=Search",
      data: { locations: gon.tweet_coords}

    }).done( function(responseData) {

      deleteMarkers();

      for( i = 0; i < responseData.length; i++) {
        var latLng = new google.maps.LatLng(responseData[i][0], responseData[i][1]);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        markers.push(marker);
      };

    }).fail( function(error){
      console.log(error);
    });
  });
});

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}