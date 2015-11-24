angular.module('myApp', ['ui.router'])

.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'templates/homeTmpl.html',
      controller: 'mainCtrl'
    })
    .state('me', {
      url: '/me',
      templateUrl: 'templates/meTmpl.html',
      controller: 'mainCtrl'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: 'templates/skillsTmpl.html',
      controller: 'mainCtrl'
    })

});