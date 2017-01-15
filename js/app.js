angular.module('myApp',['ngRoute','ngMaterial','myControllers','myFactories']).config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',
         {
            controller:   'masterController',
            templateUrl:  '/home.html'
         })
    .otherwise(
         {
            redirectTo:   '/'
         });
}]);