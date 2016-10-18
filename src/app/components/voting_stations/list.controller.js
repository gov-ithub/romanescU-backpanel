(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/

  angular.module('romanescuAdmin')
    .controller('votingStationsListController', ['$scope', 'resourceManager', '$log', '$rootScope', 'User',
      function ($scope, resourceManager, $log, $rootScope, User) {
        var vm = this,
          vmLocal = {};
        vm.data = []



        $scope.$on("$destroy", function () {
          vmLocal = null;
        })
      }
    ]);
})();
