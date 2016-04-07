(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $log, $mdDialog) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
	self.showDialog = showDialog;
	function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
	   targetEvent: $event,
         parent: parentEl,
		 templateUrl:'index2.html', 
         /*  template:
           '<md-dialog aria-label="Agregar Empresa">' +
           '  <md-dialog-content>'+
           '               <label>Guardar registro de una nueva Empresa</label>'+
		   '    <div  flex layout="row" layout-align="center center">'+
		   '       <div flex-sm="100" flex-gt-sm="90" flex-gt-md="70" flex-gt-lg="50" class="md-whiteframe-z2">'+
		   '         <md-content class="md-padding">'+
		   '            <div flex-sm="100" flex-gt-sm="80" layout-sm="column">'+
		   '               <form name="contactForm" data-ng-submit="sendMail()">'+
		   '                    <md-input-container>'+
		   '                         <label>Nombre:</label>'+
		   '                         <input ng-model="contactName" required>'+
		   '                    </md-input-container>'+
		   '                    <md-input-container>'+
		   '                         <label>Rubro:</label>'+
		   '                         <input  ng-model="entry" required>'+
		   '                    </md-input-container>'+
		   '                    <md-input-container>'+
		   '                         <label>Codigo:</label>'+
		   '                         <input  ng-model="code" required>'+
		   '                    </md-input-container>'+
		   '                   <md-input-container>'+
		   '                         <label>Sucursal:</label>'+
		   '                         <input  ng-model="subsidiary" >'+
		   '                    </md-input-container>'+
		   '                    <md-input-container flex>'+
		   '                         <label>Direccion:</label>'+
		   '                         <input  ng-model="address" >'+
		   '                    </md-input-container>'+
		   '                   <md-button type="submit" class="md-primary"  aria-label="Save Project">Send</md-button>'+
		   '              </form>'+
		   '          </div>'+
		   '        </md-content>'+
		   '     </div>'+
		   '    </div>'+
           ' </md-dialog-content>' +
           ' <md-dialog-actions>' +
           '   <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '   </md-button>' +
           ' </md-dialog-actions>' +
           '</md-dialog>', */
        
         controller: DialogController
      });
      function DialogController(self, $mdDialog) {

        self.closeDialog = function() {
          $mdDialog.hide();
        }
		self.sendMail= function() {
          $mdDialog.hide();
        }
      }
    }
  }
  
})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/