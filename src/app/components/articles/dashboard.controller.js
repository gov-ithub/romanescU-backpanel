(function() {
  'use strict';
/*eslint angular/di: [2,"array"]*/

angular.module('romanescuAdmin')
.controller('articlesDashboardController', ['resourceManager', '$scope', '$rootScope', '$log', 'articleId', 
    function (resourceManager, $scope, $rootScope, $log, articleId) { 
        var vm = this,
            vmLocal = {};
        
        vm.data = {}
        vm.test = 'This is a test';
        $log.info(articleId); 
        
        // TODO:: fetch the list of companies from the server and display here
        $scope.$on("$destroy", function() {
            vmLocal = null;
        })
    }]);
})();
