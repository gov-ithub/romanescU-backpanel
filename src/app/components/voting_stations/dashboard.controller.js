(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsDashboardController', ['ResourceService', '$log', '$scope', '$state', 'stationId',
      function (ResourceService, $log, $scope, $state, stationId) {
        var vm = this;
        vm.stationId = stationId;

        // -->Declare: functions
        ResourceService.read('voting', 'location', stationId)
          .then(function (result) {
            vm.data = result.data.source;
          }).catch(function (err) {
            vm.error = err;
            $log.error(err);
          });

        vm.delete = function (id) {
          $log.info('deleteing', id)
          ResourceService.remove('voting', 'location', id)
            .then(function (result) {
              $log.info("Success deleted");
            }).catch(function (err) {
              vm.error = err;
              $log.error(err);
            });
        };

        $scope.$on("$destroy", function () {

        })
      }
    ]);
})();
