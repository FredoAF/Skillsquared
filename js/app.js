angular.module('myApp',['ngRoute','myControllers','myFactories']).config(['$routeProvider',function($routeProvider){
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