'use strict';

angular.module('moviebuffappApp')
  .factory('Movies',['$resource', function ($resource) {
    // Service logic
    return $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=wfve5tx7wy8gqx3mbncbk8mc&q=:search&callback=JSON_CALLBACK', {}, {
      query: {method:'GET', params:{search:''}, isArray:true}
    });

    
  }]);
