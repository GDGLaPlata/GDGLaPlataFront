(function() {
	'use strict';

	angular.module('Blog', [
			'ngRoute'
		])
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/blog', {
				templateUrl: 'app/blog/blog.html',
				controller: 'blogCtrl',
				controllerAs: 'blogController'
			});
	}
})();
