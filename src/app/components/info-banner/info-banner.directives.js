/**
 * Created by vika on 22/10/15.
 */
(function() {
	'use strict';

	angular
		.module('Main')
		.directive('infoBanner', infoBanner);

	/** @ngInject */
	function infoBanner() {

		var directive = {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/components/info-banner/info-banner.html',
			scope: {
				title: '=',
				text: '='
			},
			link: infoBannerLink
		};

		return directive;

		/** @ngInject */
		function infoBannerLink() {
		}
	}

})();
