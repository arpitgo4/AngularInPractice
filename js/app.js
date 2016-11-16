'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/html/templates/login.html',
      controller: 'loginController'
    })
    .when('/dashboard', {
      templateUrl: '/html/templates/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/forget-password', {
      templateUrl: '/html/templates/forget-password.html',
      controller: 'forgetPasswordController'
    })
    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

});
