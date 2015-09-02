/**
 * Created by Sachidananda on 26-08-2015.
 */
var app = angular.module('contactsApp');
app.factory('$contact', function($resource){
    return $resource('/api/contact/:id', {id: '@id'}, {
        'update': {method: 'PUT'}
    })
});