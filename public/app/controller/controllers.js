
var app = angular.module('flightApp');
app.controller('homeController', function ($scope, $rootScope, $location, $timeout, $http) {

    $scope.search = function(){
//        alert($scope.fromCity);
    };
    $http.get('/api/cities').
        then(function(response) {
            $scope.allCities = response;
            console.log(response)
        }, function(response) {

        });

});
