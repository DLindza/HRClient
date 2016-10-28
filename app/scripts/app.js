'use strict';

/**
 * @ngdoc overview
 * @name hrclientPortalApp
 * @description
 * # hrclientPortalApp
 *
 * Main module of the application.
 */
angular
  .module('hrclientPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/timecard', {
        //templateUrl: 'views/about.html',
        templateUrl: 'views/timecard.html',
        controller: 'TimeCardCtrl'

    })
    .when('/employee', {
      templateUrl: 'views/employee.html',
      controller: 'EmployeeCtrl'
    })

      .otherwise({
        redirectTo: '/timecard'
      });
  });
