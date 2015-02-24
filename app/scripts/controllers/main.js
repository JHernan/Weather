'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', ['$scope', 'cityService',  function ($scope, cityService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    cityService.getCurrentConditions('Madrid', 'España').then(function(data){
      $scope.currentConditions = data;
    });
  }]);
