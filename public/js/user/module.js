define([
	'angular',
	'angular-ui-router',
	'angular-cookies'
], function(angular) {
	"use strict";
	return angular.module('memory.user',['ui.router', 'ngCookies'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
	        url : '/login',
	        templateUrl : 'templates/user/login.html',
	        controller : 'memory.loginCtrl'
	    })
			.state('signup', {
	        url : '/signup',
	        templateUrl : 'templates/user/signup.html',
	        controller : 'memory.signupCtrl'
	    })
	}]);
});