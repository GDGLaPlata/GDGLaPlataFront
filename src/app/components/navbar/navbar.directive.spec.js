(function() {
  'use strict';

  /**
   */
  describe('directive navbar', function() {
    var el;

    beforeEach(module('Main'));
    beforeEach(inject(function($compile, $rootScope) {
      $compile(el)($rootScope.$new());
      $rootScope.$digest();
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });
  });
})();
