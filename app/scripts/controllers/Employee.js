'use strict';

angular.module('hrclientPortalApp')
  .controller('EmployeeCtrl', function ($scope, $http, EmployeeService){
    $scope.employee = {
       "userName":''
     };



     $scope.employees = EmployeeService.async;

    //  $scope.$watch('employees', function(employees){
    //    if(angular.isDefined(employees.then)){
    //      employees.then(function(response){
    //        console.log(response);
    //        $scope.timeCards = response.data;
    //      }, function(error){
     //
    //      });
     //
    //    }
    //  });

    //  $scope.filter("dateFilter", function () {
    //    return function (item) {
    //      if (item != null) {
    //         return new Date(parseInt(item.substr(6)));
    //      }
    //      return "";
    //    };
    //  });

    $scope.show = function () {
      $http({
              method:'GET',
              url: 'http://localhost:8080/hrtimecards/search/findByUserName?username=' + $scope.username
          }).
          then( function (response) {
            $scope.timecards = response.data._embedded.timecards;
            console.log(response.data._embedded.timecards);
            EmployeeService.setUser($scope.username);
          })
    };

    //  $scope.save = function(timecard){
    //    console.log(timecard);
    //    TimeCardService.save(timecard);
    //  }
  });
