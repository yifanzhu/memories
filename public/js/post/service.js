define(['./module', 'lodash'], function (module, _) {
	'use strict';
	return module.factory('memory.postService', ['$http',function($http) {

		var getAllpost = function() {
			return $http.get('/api/posts');
		};
		
		var getpostById = function(id) {
			return $http.get('/api/posts/' + id);
		};
		
		var createpost = function(post) {
			return $http.post('/api/posts', post);
		};
		
		var updatepost = function(post) {
			return $http.put('/api/posts', post);
		};
		
		var createComment = function(comment) {
			return $http.post('/api/comments', comment);
		};

		var findComments = function(postId) {
			return $http.post('/api/comments/find', postId);
		};
		
		
		
		return {
			getAllpost: getAllpost,
			getpostById: getpostById,
			updatepost: updatepost,
			createpost: createpost,
			createComment: createComment,
			findComments: findComments
		}
	}
	]);
});