define([
	'angular',
	'angular-ui-router',
	'ng-ckeditor'
], function(angular) {
	'use strict';
	return angular.module('memory.post',['ui.router', 'ng.ckeditor'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('post-view', {
		        url : '/post/view/:id',
		        templateUrl : 'templates/post/view.html',
		        controller : 'memory.post.viewCtrl'
	    	})
	}]);
});