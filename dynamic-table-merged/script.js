// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.meals = [];
  $scope.ordered_columns = [];
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
	  
	  // i.e. the rows
	  $scope.data = [
	  {
		"name": "aleck",
		"age": 33,
		"city": "Portland 1",
		"state": "OR",
		"job": "developer"
	  }, {
		"name": "john",
		"age": 40,
		"city": "Portland 2",
		"state": "OR1",
		"job": "designer"
	  }, {
		"name": "erik",
		"age": 34,
		"city": "Portland 3",
		"state": "OR2",
		"job": "sales"
	  },
	  {
		"name": "aleck",
		"age": 33,
		"city": "Portland 1",
		"state": "OR",
		"job": "developer"
	  }, {
		"name": "john",
		"age": 40,
		"city": "Portland 2",
		"state": "OR1",
		"job": "designer"
	  }, {
		"name": "erik",
		"age": 34,
		"city": "Portland 3",
		"state": "OR2",
		"job": "sales"
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
  var dishes = [
    'noodles',
    'sausage',
    'beans on toast',
    'cheeseburger',
    'battered mars bar',
    'crisp butty',
    'yorkshire pudding',
    'wiener schnitzel',
    'sauerkraut mit ei',
    'salad',
    'onion soup',
    'bak choi',
    'avacado maki'
  ];
  var sides = [
    'with chips',
    'a la king',
    'drizzled with cheese sauce',
    'with a side salad',
    'on toast',
    'with ketchup',
    'on a bed of cabbage',
    'wrapped in streaky bacon',
    'on a stick with cheese',
    'in pitta bread'
  ];
  for (var i = 1; i <= 100; i++) {
    var dish = dishes[Math.floor(Math.random() * dishes.length)];
    var side = sides[Math.floor(Math.random() * sides.length)];
    $scope.meals.push('meal ' + i + ': ' + dish + ' ' + side);
  }
  
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);