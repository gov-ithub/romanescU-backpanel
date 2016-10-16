(function() {
  'use strict';
/*eslint angular/di: [2,"array"]*/
angular.module('romanescuAdmin')
.controller('usersNewController', ['resourceManager', '$state', function (resourceManager, $state) { 
    var vm = this,
        vmLocal = {};

    $state.params;
    // -->Get: resource
    vmLocal.resource = resourceManager.create('users');
    
    vm.validate = function() {

    }
    vm.onCreate = function() {
        vm.data = vmLocal.resource.save({action: 'save'}); 
    }

    // TODO:: fetch the list of companies from the server and display here
}]);
})();
