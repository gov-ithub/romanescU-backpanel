(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/
  angular.module('romanescuAdmin')
    .controller('votingStationsUpdateController', ['resourceManager', '$rootScope', '$log', '$scope', 'stationId', 'User',
      function (resourceManager, $rootScope, $log, $scope, stationId, User) {
        var vm = this;

        ResourceService.read('voting', 'location', stationId)
          .then(function (result) {
            vm.data = result;
          }).catch(function (err) {
            vm.error = err;
            $log.error(err);
          });

        vm.update = function () {
          ResourceService.update('voting', 'location', stationId, vm.data)
            .then(function (result) {
              // vm.data = result;
              $log.info("Success update")
            }).catch(function (err) {
              vm.error = err;
              $log.error(err);
            });
        }




        // -->End
        $scope.$on('$destroy', function () {
          vm.status = {};
          vmLocal = null;
        })
      }
    ]);
})();
