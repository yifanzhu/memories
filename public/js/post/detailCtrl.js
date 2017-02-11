define(['./module'], function (module) {
	return module.controller('memory.postDetailCtrl', ['$scope', '$cookies', '$stateParams','memory.postService',
		function($scope, $cookies, $stateParams, postService) {

			var post = {};

			var initForm = function() {
				postService.getpostById($stateParams.id).then(
					function(res) {
						post = res.data;
						$scope.post = {
							id: $stateParams.id,
							title: post.title,
							content: post.content,
							imgUrl: post.imgUrl,
							author: post._userId.name
						};
					},
					function(error) {
						console.error('error,',error);
					});

				postService.findComments({postId: $stateParams.id}).then(function(res) {
						var list = res.data;
						$scope.post.comments = [];
						_.forEach(list, function(item) {

							var comment = {
								content: item.content,
								user: item._userId.name,
								date: item.created_at
							};
							$scope.post.comments.push(comment);
						});

					console.log('$scope.post.comments,',$scope.post.comments)

				})



			};
			
			$scope.addComment = function() {
				var user = $cookies.get('user');
				if(user) {
					user = JSON.parse(user);
				}
				else {
					user = 'Guest'
				}
				var comment = {
					content: $scope.post.newComment,
					postId: $stateParams.id,
					userId: user
				};

				postService.createComment(comment).then(function(data) {
					initForm();

				});

			};
			
			initForm();

		}
	]);
});