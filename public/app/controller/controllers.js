
var app = angular.module('flightApp');
app.controller('homeController', function ($scope, $rootScope, $contact, $location, options) {
    $rootScope.PAGE = "all";
    $scope.contacts = $contact.query();
//    console.log(options);
    $scope.fields = ['firstName', 'lastName'].concat(options.displayed_fields);

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'firstName';
    $scope.sort.order = false;

    $scope.show = function (id) {
        $location.url('/contact/' + id);
    };
})
    .controller('newContactController', function ($scope, $rootScope, $contact, $location) {
        $rootScope.PAGE = "new";
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
    })
    .controller('SingleController', function ($scope, $rootScope, $location, $contact, $routeParams, $timeout) {
        $rootScope.PAGE = "single";
        $scope.contact = $contact.get({ id: parseInt($routeParams.id, 10) });
        $scope.delete = function () {
            $scope.contact.$delete();
            $location.url('/contacts');
        };
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        }, 1000);
    })
    .controller('SettingsController', function ($scope, $rootScope, options, Fields) {
        $rootScope.PAGE = 'settings';

        $scope.allFields = [];
        $scope.fields = options.displayed_fields;

        Fields.headers().then(function (data) {
            var index = data.indexOf("$resolved");
            if(index != -1) {
                data.splice(index, 1);
            }
//            console.log("SettingsController data")
//            console.log(data)
            $scope.allFields = data;
        });

        $scope.toggle = function (field) {
            var i = options.displayed_fields.indexOf(field);

            if (i > -1) {
                options.displayed_fields.splice(i, 1);
            } else {
                options.displayed_fields.push(field);
            }

            Fields.set(options.displayed_fields);
        };
    });
