angular.module('myFactories',[]).factory('myFactory', function($http,$location){
  return {
    listUsers: function(){
      return $http.get("./api/users/list");
    },
    addUser: function(nameData, ageData){
      var user = {
        name: nameData,
        age:  ageData
      }
      return $http.post("./api/users/add",user);
    }
  }
});