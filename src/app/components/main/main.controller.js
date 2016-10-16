'use strict';

angular.module('romanescuAdmin')
  .controller('MainController', function () { 

    var vm = this;

    vm.userName = 'Example user';
    vm.helloText = 'Welcome in RomanescU Admin';
    vm.descriptionText = 'This is a Angular web-app';

  });
