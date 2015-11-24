angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getName = function () {
    mainService.getName().then(function (response) {
      $scope.name = response.data.name;
    });
  }

  $scope.getLocation = function () {
    mainService.getLocation().then(function (response) {
      $scope.location = response.data.location;
    });
  }

  $scope.getHobbies = function () {
    mainService.getHobbies().then(function (response) {
      $scope.hobbies = response.data.hobbies;

    })
  }

  $scope.getSkills = function () {
    mainService.getSkills().then(function (response) {
      $scope.skills = response.data;
      console.log(response.data);
    })

  }


  $scope.getName();
  $scope.getLocation();
  $scope.getHobbies();
  $scope.getSkills();


});