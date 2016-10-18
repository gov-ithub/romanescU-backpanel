(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/
  angular.module('romanescuAdmin')
    .controller('votingStationsNewController', ["VotingStations", "$state", "$scope",

      function (VotingStations, $state, $scope) {
        var vm = this;
        vm.create = create;
        vm.data = {}

        function create() {
          var votingStations = new VotingStations()
          votingStations.data = vm.data
          votingStations.$save(votingStations)

          votingStations.$promise
            .then(function (result) {
              $state.go('index.voting_stations');
            }).catch(function (err) {
              console.error(err);
            });
        }

        // -->End
        $scope.$on('$destroy', function () {
          vm.data = {};
        })
      }
    ]);
})();
