(function() {
    'use strict';
/*eslint angular/di: [2,"array"]*/

angular.module('romanescuAdmin')
.controller('articlesListController', ['Articles','$scope', 'resourceManager', '$log', '$rootScope', 'User', 
    function(articles, $scope, resourceManager, $log, $rootScope, User) {
    var vm = this,
        vmLocal = {};
    vm.data = []
    vm.articles = [];

    $scope.articles = [];
    //inserez  articole
    var i = 0;
    while(i<100)
    {
        var randomIsActive = Math.random() >= 0.5;
        var randomIsAproved = Math.random() >= 0.5;
        var randomImage = Math.floor(Math.random() * 9) + 1 ;

        $scope.article = {
           crt: i+1,
           headline: i + 'Extra! Extra! Read alla bout it',
           alternativeHeadline: randomIsActive +  ' This article is also about robots and stuff',
           image: 'assets/images/a' + randomImage + '.jpg',
           author: 'Patrick Coombe', 
           award: 'Best article ever written',
           editor: randomIsAproved + ' Craig Mount', 
           genre: 'search engine optimization', 
           keywords: 'seo sales b2b', 
           wordcount: '1120',
           publisher: 'Book Publisher Inc',
           url: 'http://www.example.com',
           datePublished: '2015-09-20',
           dateCreated: '2015-09-20',
           dateModified: moment().add(Math.floor(Math.random() * 9) + 1, 'days').format('D MMM, YYYY'),
           description: 'We love to do stuff to help people and stuff',
           articleBody: 'You can paste your entire post in here, and yes it can get really really long.',
           isActive:  randomIsActive,
           isAproved: randomIsAproved.valueOf};
        $scope.articles.push($scope.article)
        i++;
    };
          
    vm.articles = $scope.articles; 

     //-->Init: vars 
    vm.query = {};
    vm.pagination = {
        currentPage: 1,
        itemsPerPage: 7,
        totalItems: vm.articles.length,
        maxDisplayedPages: 5
    };
    vm.sortBy = 'crt';
    vm.sortAscending = true;

    vm.search = function() {
        articles.query({
                q: vm.query, // {name: "test search"}
                currentPage: vm.pagination.currentPage, // 1
                itemsPerPage: vm.pagination.itemsPerPage, // 50
                sortBy: vm.sortBy, // 'name'
                sortAscending: vm.sortAscending // true  OR false
            }).$promise
            .then(function(result) {
                vm.items = result.list;
                vm.pagination.totalItems = result.totalItems
            }).catch(function(err) {
                $log.error(err);
                vm.error = err;
            });
    };
    vm.sort = function(sortBy) {
        vm.sortBy = sortBy;
        vm.sortAscending = !vm.sortAscending;
        vm.search()
    };

    vm.search();

    vm.test = vm.pagination;

    $scope.$on("$destroy", function() {
        vmLocal = null;
    })
}]);
})();