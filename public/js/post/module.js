define([
	'angular',
	'angular-ui-router',
	'ng-ckeditor'
], function(angular) {
	'use strict';
	return angular.module('memory.post',['ui.router', 'ng.ckeditor'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/post/list');
		
		$stateProvider
			.state('post-list', {
	        url : '/post/list',
	        templateUrl : 'templates/post/list.html',
	        controller : 'memory.postListCtrl'
	    })
	    .state('post-detail', {
	        url : '/post/detail/:id',
	        templateUrl : 'templates/post/detail.html',
	        controller : 'memory.postDetailCtrl'
	    })
	    .state('post-new', {
	        url : '/post/new',
	        templateUrl : 'templates/post/new.html',
	        controller : 'memory.postNewCtrl'
	    })
	}]);
});