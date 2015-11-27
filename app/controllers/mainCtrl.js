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
    });
  }

  $scope.getSkills = function () {
    mainService.getSkills().then(function (response) {
      $scope.skills = response.data;
      console.log(response.data);
    });
  }

  $scope.getOccupations = function () {
    mainService.getOccupations().then(function (response) {
      $scope.occupations = response.data.occupations;
      console.log(response.data.occupations);
    });

    $scope.updateHobbies = function (hobby) {
      mainService.updateHobbies(hobby).then(function (response) {
        console.log(response);
        $scope.getHobbies();
        $scope.hobby = {};
      })
    }

    $scope.updateOccupations = function (occupation) {
      mainService.updateOccupations(occupation).then(function (response) {
        $scope.getOccupations();
        $scope.occupation = '';
      })
    }

  }


  $scope.getName();
  $scope.getLocation();
  $scope.getHobbies();
  $scope.getSkills();
  $scope.getOccupations();


});