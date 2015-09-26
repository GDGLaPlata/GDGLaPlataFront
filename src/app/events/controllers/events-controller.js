'use strict';
/**
 * @ngdoc function
 * @name Main.controller:eventsCtrl
 * @description
 * # eventsCtrl
 * Controller of the Main
 */
angular.module('Main')
  .controller('eventsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
