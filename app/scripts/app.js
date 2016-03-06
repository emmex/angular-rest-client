'use strict';

angular.module('restClient', [
    'ngRoute',
    'services',
    'controllers'
])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {templateUrl: 'index.html', controller: HomeCtrl});
            $routeProvider.when('/list', {templateUrl: 'list.html', controller: 'ListCtrl'});
//  $routeProvider.when('/view/:id', {templateUrl: 'views/user-detail.html', controller: 'UserDetailCtrl'});
//  $routeProvider.when('/addEdit', {templateUrl: 'views/user-creation.html', controller: 'UserCreationCtrl'});
            $routeProvider.otherwise({redirectTo: '/'});
        });

function HomeCtrl($scope) {
    $scope.nums = [1, 2, 3];
};