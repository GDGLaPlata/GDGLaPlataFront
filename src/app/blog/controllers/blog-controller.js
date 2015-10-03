(function() {
	'use strict';
	/**
	 * @ngdoc function
	 * @name Main.controller:blogCtrl
	 * @description
	 * # blogCtrl
	 * Controller of the Main
	 */
	angular.module('Main')
		.controller('blogCtrl', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
})();