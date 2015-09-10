
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
    .run(function (options, $rootScope, $timeout) {
        $timeout(function() {
            $(".button-collapse").sideNav({
                closeOnClick: true
            },500);
            $('ul.tabs').tabs();
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year
                min: true,
                onOpen: function () {
                    this.clear();
                },
                onSet: function () {
                    /*var x,y,year,date,month;
                    x = $('.datepicker1').pickadate().val().toString();
                    y = x.split(/[ ,]+/);
                    date = y[0];
                    month = y[1];
                    year = y[2];
                    console.log(y[0]+" "+ y[1]+ " "+ y[2]);
                    if(date && month && year){
                        this.close();
                    }*/
                }
            });
        })
    });
