// Given a bit more time I would try to get pagination and images working, and would implement some search improvements, but it works alright for now.

var myapp = angular.module('myapp', []);

myapp.controller('PropertiesCtrl', PropertiesCtrl);

function PropertiesCtrl($scope, $http) {
	var searchData = {
		"basic": {
			"cities": ["LAKEWO"]
		},
		"pageNumber": 1,
		"resultsPerPage": 10
	};

	$scope.properties = [];			// empty data object
	$scope.sortType = 'id';			// set the default sort type
	$scope.sortReverse = false; 	// set the default sort order
	$scope.searchProperties = ''; 	// set the default search/filter term

	$scope.loadProperties = function() {
		$scope.loading = true;		// show loading animation
		var httpRequest = $http({
			method: 'POST',
			url: 'http://204.93.216.9:8086/property/search',
			dataType: "json",
			headers: {
				"Content-Type": "application/json"
			},
			data: searchData

		}).success(function(data, status) {
			$scope.properties = data;
			$scope.loading = false;	// hide loading animation
		});
	};

}