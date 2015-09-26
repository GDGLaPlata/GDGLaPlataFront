'use strict';
/**
 * @ngdoc function
 * @name Main.controller:newsCtrl
 * @description
 * # newsCtrl
 * Controller of the Main
 */
angular.module('Main')
  .controller('newsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
