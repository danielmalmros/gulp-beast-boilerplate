var directoryApp = angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/static/home.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: '/static/about.html'
            });
    })
