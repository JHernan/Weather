'use strict';

/**
 * @ngdoc function
 * @name weatherApp.filter:celsius
 * @description
 * # CityService
 * Filter of the weatherApp
 */
angular.module('weatherApp')
  .filter('celsius', function(){
    return function(kelvin){
      return kelvin - 273;
    }
  });
