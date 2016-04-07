(function(angular, undefined){
  "use strict";
  angular
   .module('demoApp', ['ngMaterial'])
   .controller('EmployeeController', EmployeeController);
   
  function EmployeeController($scope, $mdDialog) {

	$scope.showDialog = showDialog;
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
      function DialogController($scope, $mdDialog) {

        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
		$scope.sendMail= function() {
          $mdDialog.hide();
        }
      }
    }
  }
  
})(angular);