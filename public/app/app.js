/**
 * Created by Sachidananda on 27-08-2015.
 */
angular.module('contactsApp', ['ngRoute', 'ngResource', 'ngMessages'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/all-contacts.html'
            })
            .when('/contact/new', {
                controller: 'newContactController',
                templateUrl: 'views/new-contacts.html'
            })
            .when('/contact/:id', {
                controller: 'SingleController',
                templateUrl: 'views/single-contact.html'
            })
            .when('/settings', {
                controller: 'SettingsController',
                templateUrl: 'views/settings.html'
            })
            .otherwise({
                redirectTo: '/contacts'
            });
        $locationProvider.html5Mode(true);
    })
    .value('options', {})
    .run(function (options, Fields, $rootScope, $timeout) {
        Fields.get().success(function (data) {
            options.displayed_fields = data;
        });
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            })
        })
    });

/*.run(function (options, Fields, $rootScope, $timeout) {
    Fields.get().success(function (data) {
        options.displayed_fields = data;
    });
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        })
    })
});
*/