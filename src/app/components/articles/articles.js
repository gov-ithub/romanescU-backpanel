(function () {
  'use strict';

  angular
    .module('romanescuAdmin')
    .factory('Articles', articles);

  articles.$inject = ['$resource', '$log'];

  /* @ngInject */
  function articles($resource, $log) {
    return $resource('/api/articles/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  }
})();
