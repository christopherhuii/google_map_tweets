var markers = []

$(function() {
  $('#search-button').on('click', function() {

    var location = $('#zip_code').val();
    var query = $('#query').val();

    $.ajax({
      type: 'get',
      dataType: 'json',
      url: "/?utf8=✓&zip_code=" + location + "&query=" + query + "&commit=Search",
      data: { locations: gon.tweet_coords}

    }).done( function(responseData) {

      // Deleting all old markers previously on the map before adding new ones
      deleteMarkers();

      // Setting LatLng Bounds
      var markerBounds = new google.maps.LatLngBounds();

      // map.setCenter(new google.maps.LatLng(responseData[0][0], responseData[0][1]));

      // Iterating through all the Tweet Coordinates
      for( i = 0; i < responseData.length; i++) {
        var latLng = new google.maps.LatLng(responseData[i][0], responseData[i][1]);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });

        // Adding all markers to an array making it easier to clear/delete
        markers.push(marker);

        // Extending the boundaries for all the Tweet markers
        markerBounds.extend(marker.position)
      };

      // Fitting all the Tweet markers on the map
      map.fitBounds(markerBounds);

      // Clearing out the zip code and query text field
      document.getElementById('zip_code').value = '';
      document.getElementById('query').value = '';

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