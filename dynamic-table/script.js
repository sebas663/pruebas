var app = angular.module("app", []);

app.controller('table_controller', function($scope) {
  $scope.ordered_columns = [];
  $scope.all_columns = [{
    "title": "name",
    "type": "string",
    "checked": true
  }, {
    "title": "age",
    "type": "number",
    "checked": true
  }, {
    "title": "city",
    "type": "string",
    "checked": true

  }, {
    "title": "state",
    "type": "string",
    "checked": false
  }, {
    "title": "job",
    "type": "string",
    "checked": false
  }];
  
  // i.e. the rows
  $scope.data = [{
    "name": "aleck",
    "age": 33,
    "city": "Portland",
    "state": "OR",
    "job": "developer"
  }, {
    "name": "john",
    "age": 40,
    "city": "Portland",
    "state": "OR",
    "job": "designer"
  }, {
    "name": "erik",
    "age": 34,
    "city": "Portland",
    "state": "OR",
    "job": "sales"
  }];

  $scope.$watch('all_columns', function() {
    update_columns();
  }, true);

  var update_columns = function() {
    $scope.ordered_columns = [];
    for (var i = 0; i < $scope.all_columns.length; i++) {
      var column = $scope.all_columns[i];
      if (column.checked) {
        $scope.ordered_columns.push(column);
      }
    }
  };
});