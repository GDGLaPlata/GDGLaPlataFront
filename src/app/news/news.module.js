(function() {
	'use strict';

	angular.module('News', [
			'ngRoute'
		])
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/news', {
				templateUrl: 'app/news/news.html',
				controller: 'newsCtrl',
				controllerAs: 'newsController'
			});
	}
})();
