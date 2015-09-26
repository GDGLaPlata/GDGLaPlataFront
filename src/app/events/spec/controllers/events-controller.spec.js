'use strict';
describe('Controller: eventsCtrl', function () {
// load the controller's module
  beforeEach(module('Main'));
  var eventsCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    eventsCtrl = $controller('eventsCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
