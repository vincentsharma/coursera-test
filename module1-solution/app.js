(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

 function LunchController($scope) {
  $scope.lunchText = $scope.lunchEnter;
  function checkLunch() {
    return $scope.lunchEnter;
    if ($scope.lunchEnter.split(",").length > 3) {
      $scope.lunchText = "Too much!";
    } else {
      $scope.lunchText = "Enjoy!";
    };

  }
}


})();
