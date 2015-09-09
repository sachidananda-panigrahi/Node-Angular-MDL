
angular.module('flightApp', ['ngRoute', 'ngResource', 'ngMessages'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'views/home.html'

            })
            .otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode(true);
    })
    .value('options', {})
    .run(function (options, Fields, $rootScope, $timeout, InitService) {
        $(".button-collapse").sideNav();
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            })
        })
    });
