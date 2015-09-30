/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular

    .module('Main')
    .constant('malarkey', malarkey)
    .constant('moment', moment);
})();
