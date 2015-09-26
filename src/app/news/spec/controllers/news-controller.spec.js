'use strict';
describe('Controller: newsCtrl', function () {
// load the controller's module
  beforeEach(module('Main'));
  var newsCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    newsCtrl = $controller('newsCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
