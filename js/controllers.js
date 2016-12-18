angular.module('myControllers',[]).controller('masterController',['$scope','myFactory','$location',
  function($scope,myFactory,$location){
    $scope.users = 0;
  }]);