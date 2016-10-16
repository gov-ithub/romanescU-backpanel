(function() {
  'use strict';

  angular
    .module('romanescuAdmin')
    .run(function ($log, $rootScope, $state) {
          /** @ngInject */
          $rootScope.goto = function(route, opts) {
              $state.go(route,opts);
          }
          $log.debug('runBlock end');
      });
})();
