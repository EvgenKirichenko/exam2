;(function($) {
	"use strict";
	$(function(){
		var $fullScreenSlider = $('.ba-slider');
		$fullScreenSlider.slick({
			dots: true,
			arrow: false,
		});
		$('.ba-news__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			arrow: true
		});
	})
 function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
})(jQuery);
