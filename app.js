(function (){
'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name="ale";
  $scope.sayHello=function(){
    return "Hello!!!";
  };
});

})();
