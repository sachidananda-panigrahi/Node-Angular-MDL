/** Created by Pramod on 27-08-2015. **/
angular.module('contactsApp',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/contacts', {
                controller: 'contactController',
                templateUrl: 'views/contact-detail-view.html'
            })
            .when('/newContacts', {
                controller: 'newContactController',
                templateUrl: 'views/new-contact.html'
            })
            .otherwise('/contacts');
        $locationProvider.html5Mode(true)
    });
