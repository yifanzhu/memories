define([
	'angular',
	'angular-ui-router',
	'ng-ckeditor',
	'angular-file-upload'
], function(angular) {
	'use strict';
	return angular.module('memory.collection',['ui.router', 'ng.ckeditor', 'angularFileUpload'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/collections');
		
		$stateProvider
			.state('collection-list', {
	        url : '/collections',
	        templateUrl : 'templates/collection/list.html',
	        controller : 'memory.collection.listCtrl'
	    })
	    .state('collection-view', {
	        url : '/collection/:id',
	        templateUrl : 'templates/collection/view.html',
	        controller : 'memory.collection.viewCtrl'
	    })
	    .state('collection-new', {
	        url : '/collection/new',
	        templateUrl : 'templates/collection/new.html',
	        controller : 'memory.collection.newCtrl'
	    })
	}]);
});