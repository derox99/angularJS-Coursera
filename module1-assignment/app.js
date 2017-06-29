(function() {
  'use strict';
  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController)

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.dishesCount=function(){
      if($scope.dishesList.split(',').length<4){
        $scope.message='Enjoy!';
      }else {
        $scope.message='Too much!';
      }
    };
  }
})();
