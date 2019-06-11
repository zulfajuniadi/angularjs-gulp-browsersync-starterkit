angular.module('app')
  .config(function (
    $stateProvider
  ) {
    $stateProvider.state({
      name: 'home',
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    });
  })
  .controller('HomeController', function ($scope) {
    console.log('HomeController Loaded!');
  })