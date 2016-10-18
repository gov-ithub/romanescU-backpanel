(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsListController', ["VotingStations", "$state", "$scope",
      function (VotingStations, $state, $scope) {
        var vm = this;
        vm.delete = remove;

        // vm.items = VotingStations.query();

        vm.items = [{
          crt: 1,
          country: "albania",
          city: 'Tirana',
          address: "24, Rue Arezki Abri , Hydra, 16035",
          location: {
            latitude: 33.23234,
            longitude: 34.2332
          }
        }]



        function remove() {

        }


        $scope.$on("$destroy", function () {
          vm.items = [];
        })
      }
    ]);
})();
