define(['./module'], function (module) {
	return module.controller('memory.postNewCtrl', ['$scope', '$cookies', '$state', 'memory.postService',
		function($scope, $cookies, $state, postService) {


			$scope.post = {};

			var user = $cookies.get('user');
			if(user) {
				$scope.post.userId = JSON.parse(user)._id;
				$scope.user = JSON.parse(user);
			}
			
			$scope.create = function() {
				postService.createpost($scope.post)
					.then(function(data) {
						$state.go('post-list');
					}, function(error) {
						console.error('error,',error)
					});
			}

		}
	]);
});
