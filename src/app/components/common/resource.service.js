(function () {
  'use strict';

  angular
    .module('romanescuAdmin')
    .factory('ResourceService', resourceService);

  resourceService.$inject = ['$http'];

  /* @ngInject */
  function resourceService($http) {
    var service = {
      create: create,
      read: read,
      update: update,
      remove: remove,
      query: query
    };

    return service;

    function call(verb, url, data, params) {
      return $http({
        method: verb,
        url: "http://localhost:8090/api/v0/" + url,
        data: data,
        params: params
      });
    }

    function create(resource, resourceType, data) {
      return call("POST", "indexDocument/" + resource + '/' + resourceType, data);
    }

    function read(resource, resourceType, resourceId) {
      return call("GET", "getDocument/" + resource + '/' + resourceType + '/' + resourceId);
    }

    function query(resource, query) {
      return call("GET", "getDocuments/" + resource + '/_all');
    }

    function update(resource, resourceType, resourceId, data) {
      return call("PATCH", "getDocuments/" + resource + '/' + resourceType + '/' + resourceId, data)
    }

    function remove(resource, resourceType, resourceId) {
      return call("DELETE", "deleteDocument/" + resource + '/' + resourceType + '/' + resourceId);
    }

  }
})();
