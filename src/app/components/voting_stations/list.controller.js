(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsListController', ["ResourceService", "$state", "$scope", '$log',
      function (ResourceService, $state, $scope, $log) {
        var vm = this,
          vmLocal = {};

        //-->Init: vars
        vm.query = {};
        vm.pagination = {
          currentPage: 1,
          itemsPerPage: 7,
          totalItems: 150,
          maxDisplayedPages: 5
        };
        vm.sortBy = 'crt';
        vm.sortAscending = true;

        // -->Declare: functions
        vm.delete = function (id) {
          ResourceService.remove('voting', 'location', id)
            .then(function (result) {
              $log.info("Success deleted");
            }).catch(function (err) {
              vm.error = err;
              console.error(err);
            });
        };
        vm.search = function () {
          ResourceService.query('voting', {
              q: vm.query, // {name: "test search"}
              currentPage: vm.pagination.currentPage, // 1
              itemsPerPage: vm.pagination.itemsPerPage, // 50
              sortBy: vm.sortBy, // 'name'
              sortAscending: vm.sortAscending // true  OR false
            })
            .then(function (result) {
              vm.items = result.list;
              vm.pagination.totalItems = result.totalItems
            }).catch(function (err) {
              $log.error(err);
              vm.error = err;
            });
        };
        vm.sort = function (sortBy) {
          vm.sortBy = sortBy;
          vm.sortAscending = !vm.sortAscending;
          vm.search()
        };

        // -->INIT
        vm.search();


        $scope.$on("$destroy", function () {
          vm.items = [];
        })
      }
    ]);
})();
