(function() {
	'use strict';
	/**
	 * @ngdoc function
	 * @name Events.controller:eventsCtrl
	 * @description
	 * # eventsCtrl
	 * Controller of the Main
	 */
	angular.module('Events')
		.controller('eventsCtrl', function ($scope) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		});
})();