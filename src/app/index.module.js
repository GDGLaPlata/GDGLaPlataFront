(function() {
  'use strict';

  angular
    .module('Main', [
		  'Blog',
		  'Events',
		  'News',
		  'ngAnimate',
		  'ngAria',
		  'ngCookies',
		  'ngMaterial',
		  'ngMessages',
		  'ngResource',
		  'ngRoute',
		  'ngSanitize',
		  'ngTouch',
		  'toastr'
	    ])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue')
				.accentPalette('orange')
		        .dark();
		});

})();
