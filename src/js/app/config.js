angular.module('app')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  })