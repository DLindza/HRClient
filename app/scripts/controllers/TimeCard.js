'use strict';

/**
 * @ngdoc function
 * @name hrclientPortalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrclientPortalApp
 */
/*angular.module('hrclientPortalApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
angular.module('hrclientPortalApp')
  .controller('TimeCardCtrl', function (TimeCardService, $scope){
    $scope.timecard = {
       "userName":'',
       "startTime":'',
       "endTime":'',
       "punchDate":''
     };

     $scope.timeCards = TimeCardService.async;

     $scope.$watch('timeCards', function(timeCards){
       if(angular.isDefined(timeCards.then)){
         timeCards.then(function(response){
           console.log(response);
           $scope.timeCards = response.data;
         }, function(error){

         });

       }
     });

    //  $scope.filter("dateFilter", function () {
    //    return function (item) {
    //      if (item != null) {
    //          return new Date(parseInt(item.substr(6)));
    //      }
    //      return "";
    //    };
    //  });


     $scope.save = function(timecard){
       console.log(timecard);
       TimeCardService.save(timecard);
     }
  });
