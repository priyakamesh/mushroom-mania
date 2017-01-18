const app = angular.module("mushroomApp", ["ngRoute"])

app.config(($routeProvider)=>{
  $routeProvider
  .when("/",{
    controller: "MainCtrl",
    templateUrl: "partial/main.html"
  })
})


app.controller("MainCtrl", function ($scope, $http){

  $http.get(`mushrooms.json`)
    .then(function(value){
      console.log(value.data)
      $scope.mushrooms = value.data.mushrooms
      console.log($scope.mushrooms)
    })
})
