(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsListController', ["VotingStations", "$state", "$scope",
      function (VotingStations, $state, $scope) {
        var vm = this;
        vm.delete = remove;
        vm.search = search;


        //set default
        vm.query = {};
        vm.pagination = {
          currentPage: 1,
          itemsPerPage: 7,
          totalItems: 150,
          maxDisplayedPages: 5
        };
        vm.sortBy = 'crt';
        vm.sortDirection = "ASC";

        search();

        function search() {
          VotingStations.query({
              q: vm.query, // name = "test search"
              currentPage: vm.pagination.currentPage, // 1
              itemsPerPage: vm.pagination.itemsPerPage, // 50
              sortBy: vm.sortBy, // name
              sortDirection: vm.sortDirection // 'ASC' sau 'DESC'
            }).$promise
            .then(function (result) {
              vm.items = result.list;
              vm.pagination.totalItems = result.totalItems
            }).catch(function (err) {
              console.error(err);
              vm.error = err;
            });

          //TODO delete when the server is running
          vm.items = [{
            crt: 1,
            country: "albania",
            city: 'Tirana',
            address: "24, Rue Arezki Abri , Hydra, 16035",
            location: {
              latitude: 33.23234,
              longitude: 34.2332
            },
            isEnabled: true,
            priority: 100
          }, {
            crt: 2,
            country: "alb3234f3ania",
            city: 'Tirana',
            address: "24, Rue Arezki Abri , Hydra, 16035",
            location: {
              latitude: 33.23234,
              longitude: 34.2332
            },
            isEnabled: true,
            priority: 100
          }, {
            crt: 3,
            country: "asdasdasd",
            city: 'Tirana',
            address: "24, Rue Arezki Abri , Hydra, 16035",
            location: {
              latitude: 33.23234,
              longitude: 34.2332
            },
            isEnabled: false,
            priority: 100
          }]
        }

        function remove() {

        }

        $scope.$on("$destroy", function () {
          vm.items = [];
        })
      }
    ]);
})();
