(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/
  angular.module('romanescuAdmin')
    .controller('votingStationsUpdateController', ['ResourceService', '$log', '$scope', '$state', 'stationId',
      function (ResourceService, $log, $scope, $state, stationId) {
        var vm = this;
        vm.stationId = stationId;
        ResourceService.read('voting', 'location', stationId)
          .then(function (result) {
            vm.data = result.data.source;
          }).catch(function (err) {
            vm.error = err;
            $log.error(err);
          });

        vm.update = function () {
          ResourceService.update('voting', 'location', stationId, vm.data)
            .then(function (result) {
              $log.info("Success update");
              $state.go('index.voting_stations');
            }).catch(function (err) {
              vm.error = err;
              $log.error(err);
            });
        }

        // -->End
        $scope.$on('$destroy', function () {})
      }
    ]);
})();
