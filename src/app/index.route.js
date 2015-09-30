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
			.when('/blog', {
				templateUrl: 'app/blog/blog.html',
				controller: 'blogCtrl',
				controllerAs: 'blogController'
			})
			.when('/contact', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'contactController'
			})
			.when('/events', {
				templateUrl: 'app/events/events.html',
				controller: 'eventsCtrl',
				controllerAs: 'eventsController'
			})
			.when('/news', {
				templateUrl: 'app/news/news.html',
				controller: 'newsCtrl',
				controllerAs: 'newsController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
})();
