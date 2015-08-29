$(function() {
  $('#search-button').on('click', function() {
    var location = $('#zip_code').val();
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: "/?utf8=✓&zip_code=" + location + "&commit=Search",
      data: { locations: gon.tweet_coords}

    }).done( function(responseData) {

      for( i = 0; i < responseData.length; i++) {
        var latLng = new google.maps.LatLng(responseData[i][0], responseData[i][1]);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
      };

    }).fail( function(error){
      console.log(error);
    });
  });
});

