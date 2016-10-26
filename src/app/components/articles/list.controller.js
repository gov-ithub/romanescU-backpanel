(function() {
    'use strict';
/*eslint angular/di: [2,"array"]*/

angular.module('romanescuAdmin')
.controller('articlesListController', ['$scope', 'resourceManager', '$log', '$rootScope', 'User', 
    function($scope, resourceManager, $log, $rootScope, User) {
    var vm = this,
        vmLocal = {};
    vm.data = []
    
    vm.test = 'This is a test';



    $scope.$on("$destroy", function() {
        vmLocal = null;
    })
}]);
})();