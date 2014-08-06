'use strict';

angular.module('moviebuffappApp')
  .controller('MainCtrl', ['$scope', '$http','Movies',function ($scope,$http,Movies) {

  	$scope.movieSearch = function(){

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=wfve5tx7wy8gqx3mbncbk8mc&q='+$scope.search+'&callback=JSON_CALLBACK')
    .success(function(data) {
      	
      	$scope.movies = data.movies;
	
      	for (var i = 0; i < data.movies.length; i++) {
      		$scope.movies[i].details = false;
      		$scope.movies[i].getreview = false;
      		if($scope.movies[i].synopsis=='')
      		{
      			$scope.movies[i].synopsis = "N/A";
      		}
      	};
    });
    
  }

	$scope.showDetails = function(index){
		$scope.movies[index].details = !$scope.movies[index].details;
		
	}

	$scope.showReviews = function(index){
		$scope.movies[index].getreview = !$scope.movies[index].getreview;
		if($scope.movies[index].getreview) {
  		$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/'+$scope.movies[index].id+'/reviews.json?apikey=wfve5tx7wy8gqx3mbncbk8mc&callback=JSON_CALLBACK')
  		.success(function(data) {
        		
        		$scope.movies[index].reviews = new Array();
        		$scope.movies[index].reviews = data.reviews;
        	
      });
	  }
	}

}]);
