define(['./module'], function (module) {
	return module.controller('memory.postListCtrl', ['$scope', '$cookies', '$state','memory.postService',
		function($scope, $cookies, $state, postService) {
		postService.getAllpost().then(
			function(res) {
				$scope.postList = res.data;
			},
			function(error) {
				console.error('error,',error);
			});
			

			$scope.postDetail = function(id) {
				$state.go('post-detail', {'id': id});
			};

			console.log('$cookies',$cookies.get('user'))

	}
	]);
});