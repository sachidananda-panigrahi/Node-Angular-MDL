
var app = angular.module('flightApp');
app.factory('$cities', function ($http) {
    return {
        get : function(){
           var data = $http.get('/api/cities').
                then(function(response) {
                    console.log(response)
                    return response;
                }, function(response) {

                });
            return data;
        }

    }

});