angular.module('myApp').service('mainService', function ($http) {

  this.getName = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/name'
    }).then(function (res) {
      console.log(res);
      return res;
    });
  }

  this.getLocation = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/location'
    }).then(function (res) {
      return res;
    })
  }

  this.getHobbies = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/hobbies'
    }).then(function (res) {
      return res;
    })
  }

  this.getSkills = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/skills'
    }).then(function (res) {
      console.log(res);
      return res;
    })
  }



});