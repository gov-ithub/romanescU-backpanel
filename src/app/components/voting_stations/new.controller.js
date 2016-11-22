(function () {
  'use strict';
  /*eslint angular/di: [2,"array"]*/
  angular.module('romanescuAdmin')
    .controller('votingStationsNewController', ["ResourceService", "$state", "$scope",

      function (ResourceService, $state, $scope) {
        var vm = this;
        vm.create = create;
        vm.data = {
          isEnabled: true,
          priority: 100
        };

        function create() {

          ResourceService.create('voting', 'location', vm.data)
            .then(function (result) {
              $state.go('index.voting_stations');
            }).catch(function (err) {
              vm.error = err;
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
