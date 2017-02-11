define([
 	'angular', 
 	'angular-material',
 	'app'
 	], function () {
    var app = angular.module('memory.starter', [
    	'ngMaterial',
    	'memory.app'
    	]);

    angular.bootstrap(document.getElementsByTagName('body')[0], ['memory.starter']);

    return app;
});
