/**
 * Created by Sachidananda on 27-08-2015.
 */
angular.module('contactsApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/all-contacts.html'
            })
            .otherwise({
                redirectTo: '/contacts'
            });
        $locationProvider.html5Mode(true);
    })
    .run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
    })
})
});