define(['./module', 'lodash'], function (module, _) {
	'use strict';
	return module.factory('memory.userService', ['$http',function($http) {

		var getUserById = function(id) {
			return $http.get('/api/users/' + id);
		};

		var findUser = function(user) {
			return $http.post('/api/users/find', user);
		};
		
		var createUser = function(user) {
			return $http.post('/api/users', user);
		};
		
		return {
			getUserById: getUserById,
			findUser: findUser,
			createUser: createUser
		}
	}
	]);
});