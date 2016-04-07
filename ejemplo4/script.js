angular.module('MyApplication', [])
  .controller('ApplicationController', function() {
    var results = [
      "green",
      "red",
      "blue",
      "orange",
      "yellow",
      "pink",
      "gold",
      "silver"
    ];
    this.searchCriteria = '';
    this.getResults = function(search) {
      return results.filter(function(r) {
        return search ? r.indexOf(search) >= 0 : true;
      });
    };
  })
  
  
  .component('autocompleteWidget', {
    /* templateUrl: 'C:\/SEBA/pruebas/ejemplo4/autocomplete-widget-tpl.html', */
	templateUrl: 'autocomplete-widget-tpl.html',
    transclude: {
      input: 'inputArea',
      results: 'resultsArea'
    }
  });