/**
 * Created by Sachidananda on 26-08-2015.
 */
var app = angular.module('contactsApp');
app.controller('ListController', function($scope, $rootScope, $contact, $location){
    $scope.contacts = $contact.query();
    $scope.fields = ['firstName', 'lastName'];

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'firstName';
    $scope.sort.order = false;

    $scope.show = function (id) {
        $location.url('/contact/' + id);
    };

}).controller('newContactController',function($scope, $rootScope, $contact, $location){
    $scope.contact = new $contact({
        firstName: ['', 'text'],
        lastName:  ['', 'text'],
        email:     ['', 'email'],
        homePhone: ['', 'tel'],
        cellPhone: ['', 'tel'],
        birthday:  ['', 'date'],
        website:   ['', 'url'],
        address:   ['', 'text']
    });

    $scope.save = function () {
        if ($scope.newContact.$invalid) {
            $scope.$broadcast('record:invalid');
        } else {
            $scope.contact.$save();
            $location.url('/contacts');
        }
    };
}).controller('SingleController',function($scope, $rootScope, $contact, $location, $routeParams){
    $scope.contact = $contact.get({ id: parseInt($routeParams.id, 10) });
    $scope.delete = function () {
        $scope.contact.$delete();
        $location.url('/contacts');
    };
});