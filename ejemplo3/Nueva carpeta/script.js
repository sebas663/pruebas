var App = angular.module('myApp', ['ui.bootstrap']);

function init() {
    loadItems();
}

function loadItems() {
    // *** My actual code, but since there's no server, not going to use it ***
    // $.ajax({
    //     url: '/getItems',
    //     type: 'GET',
    //     success: function( data ) {
    //         sessionStorage.setItem( 'items', JSON.stringify(data) );
    //     },
    //     failure: function( msg ) {
    //         alert("Error: "+msg);
    //     }
    // });
    // *** Code as replacement ***
    var data = [ 
      { name: 'Chicken', id: '7777' },
      { name: 'Corn', id: '9001' },
      { name: 'Cabbage', id: '6996' },
      { name: 'Chili', id: '4242' },
	  { name: 'seba', id: '4244' },
	  { name: 'Chili', id: '4245' },
	  { name: 'Chili', id: '4246' },
	  { name: 'Chili', id: '4247' },
      { name: 'Cheese', id: '1337' }
    ];
    sessionStorage.setItem( 'items', JSON.stringify(data) );
}

function TypeaheadCtrl( $scope, $http ) {
    $scope.selected = undefined;
    $scope.items = JSON.parse(sessionStorage.getItem('items'));
}