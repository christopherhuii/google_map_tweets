$(function() {
  google.maps.event.addDomListener(window, 'load', initMap);

  $(window).resize(function () {
      var h = $(window).height()

      $('#map').css('height', h);
  }).resize();
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.0017, lng: -117.8208},
    scrollwheel: false,
    zoom: 12
  });
};