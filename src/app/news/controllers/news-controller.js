(function() {
	'use strict';
	/**
	 * @ngdoc function
	 * @name News.controller:newsCtrl
	 * @description
	 * # newsCtrl
	 * Controller of the Main
	 */
	angular.module('News')
		.controller('newsCtrl', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
})();