define(['./module', 'lodash'], function (module, _) {
	'use strict';
	return module.factory('memory.post.service', ['$http',function($http) {

		var getAllpost = function() {
			return $http.get('/api/posts');
		};

		var findPost = function(id) {
			return $http.get('/api/posts/find/' + id);
		};
		
		var getPostById = function(id) {
			return $http.get('/api/posts/' + id);
		};
		
		var createPost = function(post) {
			return $http.post('/api/posts', post);
		};
		
		var updatePost = function(post) {
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
			findPost: findPost,
			getpostById: getPostById,
			updatepost: updatePost,
			createpost: createPost,
			createComment: createComment,
			findComments: findComments
		}
	}
	]);
});