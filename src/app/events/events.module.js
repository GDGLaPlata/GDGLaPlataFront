(function() {
	'use strict';

	angular.module('Events', [
			'ngRoute'
		])
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/events', {
				templateUrl: 'app/events/events.html',
				controller: 'eventsCtrl',
				controllerAs: 'eventsController'
			});
	}
})();
