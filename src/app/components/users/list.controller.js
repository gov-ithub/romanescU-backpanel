(function() {
  'use strict';

/*eslint angular/di: [2,"array"]*/
angular.module('romanescuAdmin')
.controller('usersListController', ['resourceManager', '$log', function (resourceManager, $log) { 
    var vm = this,
        vmLocal = {};
    
    vmLocal.resource = vmLocal.resource = resourceManager.create('user');
    
    vm.data = vmLocal.resource.get({action: 'list', id: 0}); 
     
    vm.data = []
    $log.log('xisi')

    // TODO:: fetch the list of companies from the server and display here
}]);
})();
