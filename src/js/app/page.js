angular.module('app')
  .config(function (
    $stateProvider
  ) {
    $stateProvider.state({
      name: 'page',
      url: '/page',
      templateUrl: 'templates/page.html',
      controller: 'PageController'
    });
  })
  .controller('PageController', function ($scope) {
    console.log('PageController Loaded!');
  })