'use strict';

var app = angular.module('controllers', []);

//app.run(function ($rootScope, $templateCache) {
//  $rootScope.$on('$viewContentLoaded', function () {
//    $templateCache.removeAll();
//  });
//});

app.controller('ListCtrl', ['$scope', '$location', 'ListFactory', function ($scope, $location, ListFactory) {
      $scope.riddles = ListFactory.getList();
//    /* callback for ng-click 'editUser': */
//    $scope.editUser = function (userId) {
//      $location.path('/user-detail/' + userId);
//    };
//
//    /* callback for ng-click 'deleteUser': */
//    $scope.deleteUser = function (userId) {
//      UserFactory.delete({ id: userId });
//      $scope.users = UsersFactory.query();
//    };
//
//    /* callback for ng-click 'createUser': */
//    $scope.createNewUser = function () {
//      $location.path('/user-creation');
//    };
//
//    $scope.users = UsersFactory.query();
  }]);
//
//app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
//  function ($scope, $routeParams, UserFactory, $location) {
//
//    /* callback for ng-click 'updateUser': */
//    $scope.updateUser = function () {
//      UserFactory.update($scope.user);
//      $location.path('/user-list');
//    };
//
//    /* callback for ng-click 'cancel': */
//    $scope.cancel = function () {
//      $location.path('/user-list');
//    };
//
//    $scope.user = UserFactory.show({id: $routeParams.id});
//  }]);
//
//app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
//  function ($scope, UsersFactory, $location) {
//
//    /* callback for ng-click 'createNewUser': */
//    $scope.createNewUser = function () {
//      UsersFactory.create($scope.user);
//      $location.path('/user-list');
//    };
//  }]);