'use strict';

angular.module('hrclientPortalApp')
  .controller('EmployeeCtrl', function ($scope){
    $scope.employee = {
       "userName":''
     };

     //$scope.timeCards = TimeCardService.async;

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


    //  $scope.save = function(timecard){
    //    console.log(timecard);
    //    TimeCardService.save(timecard);
    //  }
  });
