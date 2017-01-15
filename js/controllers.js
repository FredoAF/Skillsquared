angular.module('myControllers',[]).controller('masterController',['$scope','myFactory','$location',function($scope,myFactory,$location){
    $scope.addUser = function(){
      myFactory.addUser($scope.nameData,$scope.ageData)
        .then(function successCallback(response){
          console.log(response.data);
          //reset text fields
          $scope.nameData = "";
          $scope.ageData = "";
          //reload users from DB
          $scope.listUsers();
      }, function errorCallback(response){
          console.log("unable to perform request");
      });
    }
    $scope.listUsers = function(){
      myFactory.listUsers()
        .then(function successCallback(response){
          $scope.users = response.data;
      }, function errorCallback(response){
          console.log("no users found");
      });
    }
    $scope.deleteUser = function(userID){
      myFactory.deleteUser(userID)
        .then(function successCallback(response){
          //reload users from DB
          $scope.listUsers();
      }, function errorCallback(response){
          console.log("unable to perform request");
      });
    }
    $scope.listUsers();
}]);