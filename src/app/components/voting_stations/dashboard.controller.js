(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsDashboardController', ['resourceManager', '$scope', '$rootScope', '$log', 'stationId',
      function (resourceManager, $scope, $rootScope, $log, stationId) {
        var vm = this;

        ResourceService.read('voting', 'location', stationId)
          .then(function (result) {
            vm.data = result;
          }).catch(function (err) {
            vm.error = err;
            $log.error(err);
          });

        $scope.$on("$destroy", function () {
          vmLocal = null;
        })
      }
    ]);
})();
