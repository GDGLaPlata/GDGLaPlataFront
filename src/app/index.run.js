(function() {
  'use strict';

  angular
    .module('Main')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
