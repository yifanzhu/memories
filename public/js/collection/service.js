define(['./module', 'lodash'], function (module, _) {
	'use strict';
	return module.factory('memory.collection.service', ['$http',function($http) {

		var getAllcollection = function() {
			return $http.get('/api/collections');
		};
		
		var getcollectionById = function(id) {
			return $http.get('/api/collections/' + id);
		};
		
		var createCollection = function(collection) {
			return $http.post('/api/collections', collection);
		};
			
		return {
			getAllcollection: getAllcollection,
			getCollectionById: getCollectionById,
			createCollection: createCollection
		}
	}
	]);
});