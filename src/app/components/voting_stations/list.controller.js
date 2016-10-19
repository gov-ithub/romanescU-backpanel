(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsListController', ["VotingStations", "$state", "$scope", "$log", "$uibModal",

      function (VotingStations, $state, $scope, $log, $uibModal) {
        var vm = this;
        vm.remove = remove;

        init()

        function init() {
          //set default
          vm.query = {};
          vm.pagination = {
            currentPage: 1,
            itemsPerPage: 7,
            //   totalItems: 150,
            maxDisplayedPages: 5
          };

          vm.sortBy = 'crt';
          vm.sortDirection = "ASC";
          search();
        }

        function search() {
          vm.items = VotingStations.query({
            q: vm.query, // name = "test search"
            currentPage: vm.pagination.currentPage, // 1
            itemsPerPage: vm.pagination.itemsPerPage, // 50
            sortBy: vm.sortBy, // name
            sortDirection: vm.sortDirection // 'ASC' sau 'DESC'
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
            }
          }, {
            crt: 2,
            country: "alb3234f3ania",
            city: 'Tirana',
            address: "24, Rue Arezki Abri , Hydra, 16035",
            location: {
              latitude: 33.23234,
              longitude: 34.2332
            },
            isEnabled: true
          }, {
            crt: 3,
            country: "asdasdasd",
            city: 'Tirana',
            address: "24, Rue Arezki Abri , Hydra, 16035",
            location: {
              latitude: 33.23234,
              longitude: 34.2332
            },
            isEnabled: false
          }]
        }

        function remove(id) {
          console.log("removed", id)
        }

        $scope.$on("$destroy", function () {
          vm.items = [];
        })
      }
    ]);
})();
