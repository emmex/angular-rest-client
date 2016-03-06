'use strict';

var services = angular.module('services', ['ngResource']);
var baseUrl = 'http://localhost\\:8080';

services.factory('ListFactory', function ($resource) {
    return $resource(baseUrl + '/app/core/riddle', {}, {
        getList: {method: 'GET', isArray: true},
        create: {method: 'POST'}
    });
});

services.factory('RiddleFactory', function ($resource) {
    return $resource(baseUrl + '/app/core/riddle/:id', {}, {
        view: {method: 'GET'},
        update: {method: 'PUT', params: {id: '@id'}},
        delete: {method: 'DELETE', params: {id: '@id'}}
    });
});