// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

myApp.controller('DynamicTableController', DynamicTableController);
myApp.controller('OtherController', OtherController);

function DynamicTableController($scope,$filter) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.ordered_columns = [];
  
  var orderBy = $filter('orderBy');

  $scope.order = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.data = orderBy($scope.data, predicate, $scope.reverse);
    };
  $scope.order('name', true);

  $scope.all_columns = [{
		"title": "name",
		"type": "string"
	  }, {
		"title": "age",
		"type": "number"
	  }, {
		"title": "city",
		"type": "string"

	  }, {
		"title": "state",
		"type": "string"
	  }, {
		"title": "job",
		"type": "string"
	  }];
	  
  $scope.data = [
	  {
		"name": "aaaaaa",
		"age": 1,
		"city": "bbbbbbbb",
		"state": "cccccccc",
		"job": "dddddddd"
	  }, {
		"name": "bbbbbbb",
		"age": 3,
		"city": "ccccccc",
		"state": "dddddddd",
		"job": "eeeeeee"
	  }, {
		"name": "ccccccc",
		"age": 3,
		"city": "ddddddd",
		"state": "eeeeeee",
		"job": "ffffffff"
	  },
	  {
		"name": "dddddddd",
		"age": 5,
		"city": "eeeeeeeee",
		"state": "ffffffff",
		"job": "ggggggg"
	  }, {
		"name": "eeeeeeee",
		"age": 4,
		"city": "ffffffff",
		"state": "ggggggg",
		"job": "hhhhhhhh"
	  }, {
		"name": "fffffffff",
		"age": 6,
		"city": "ggggggggg",
		"state": "hhhhhhhh",
		"job": "iiiiiiii"
	  }
	  ];

	  $scope.$watch('all_columns', function() {
		update_columns();
	  }, true);

	  var update_columns = function() {
		$scope.ordered_columns = [];
		for (var i = 0; i < $scope.all_columns.length; i++) {
		  var column = $scope.all_columns[i];
			$scope.ordered_columns.push(column);
		}
	  };
  
  
	  $scope.pageChangeHandler = function(num) {
		  console.log('meals page changed to ' + num);
	  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

