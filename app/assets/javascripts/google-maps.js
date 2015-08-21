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
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
};