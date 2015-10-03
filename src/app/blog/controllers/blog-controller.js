(function() {
	'use strict';
	/**
	 * @ngdoc function
	 * @name Blog.controller:blogCtrl
	 * @description
	 * # blogCtrl
	 * Controller of the Main
	 */
	angular.module('Blog')
		.controller('blogCtrl', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
})();