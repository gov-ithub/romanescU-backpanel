(function() {
    'use strict';

    angular
        .module('romanescuAdmin')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $stateProvider
            .state('index', {
                abstract: true,
                url: "/index",
                templateUrl: "app/components/common/content.html"
            })
            .state('index.main', {
                url: "/main",
                templateUrl: "app/components/main/main.html",
                data: { pageTitle: 'Dashboard' }
            })
            // -->Product: pages
            .state('index.articles', {
                url: "/articles",
                controller: "articlesListController as vm",
                templateUrl: "app/components/articles/list.html",
                data: { pageTitle: 'articles' }
            })
            .state('index.articles_new/:articleId', {
                url: "/articles_new/:articleId",
                controller: "articlesNewController as vm",
                templateUrl: "app/components/articles/new.html",
                data: { pageTitle: 'articles' },
                resolve: {
                    articleId: ['$stateParams', function($stateParams) { return $stateParams.articleId; }]
                }
            })
            .state('index.articles_dashboard/:articleId', {
                url: "/articles_dashboard/:articleId",
                controller: "articlesDashboardController as vm",
                templateUrl: "app/components/articles/dashboard.html",
                data: { pageTitle: 'Products' },
                resolve: {
                    articleId: ['$stateParams', function($stateParams) { return $stateParams.articleId; }]
                }
            })
            // -->User: pages
            .state('index.users', {
                url: "/users",
                templateUrl: "app/components/users/list.html",
                controller: "usersListController as vm",
                data: { pageTitle: 'Users' }
            })
            .state('index.users_new', {
                url: "/users_new",
                templateUrl: "app/components/users/new.html",
                controller: "usersNewController as vm",
                data: { pageTitle: 'New User' }
            })
            .state('index.users_dashboard/:userId', {
                url: "/users_dashboard/:userId",
                templateUrl: "app/components/users/dashboard.html",
                controller: "usersDashboardController as vm",
                data: { pageTitle: 'UserName' },
                resolve: {
                    userId: ['$stateParams', function($stateParams) { return $stateParams.userId; }]
                }
            });

        $urlRouterProvider.otherwise('/index/main');
    }

})();