/**
 * Created by vika on 30/09/15.
 */
(function() {
	'use strict';

	angular
		.module('Main')
		.directive('heroBanner', heroBanner);

	/** @ngInject */
	function heroBanner() {

		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/hero-banner/hero-banner.html',
			scope: {
				title: '='
			},
			link: heroBannerLink
		};

		return directive;

		/** @ngInject */
		function heroBannerLink() {
		}
	}

})();
