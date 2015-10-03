(function() {
	'use strict';

	angular
		.module('Main')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'mainController'
			})
			.when('/contact', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'contactController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
})();
