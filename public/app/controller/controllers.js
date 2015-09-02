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

}).controller('newContactController',function(){

}).controller('SingleController',function($scope, $rootScope, $contact, $location, $routeParams){
    $scope.contact = $contact.get({ id: parseInt($routeParams.id, 10) });
    $scope.delete = function () {
        $scope.contact.$delete();
        $location.url('/contacts');
    };
});