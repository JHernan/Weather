'use strict';

/**
 * @ngdoc function
 * @name weatherApp.service:cityService
 * @description
 * # CityService
 * Service of the weatherApp
 */
angular.module('weatherApp')
  .factory('cityService', function($http, $q){
    var service = {};
    var baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    var lang = 'sp';

    service.getCurrentConditions = function(city, country){
      var deferred = $q.defer();

      $http.get(baseUrl,
        {
          params: {
            q: city + ',' + country,
            lang: lang
          },
          responseType: 'json'
        }
      )
        .success(
        function(response){
          console.log(response);
          deferred.resolve(response);
        }
      );

      return deferred.promise;
    }

    return service;
  });
