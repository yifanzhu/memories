define(['./module'], function (module) {
	return module.controller('memory.collection.viewCtrl', [
		'$scope', 
		'$cookies', 
		'$state',
		'memory.post.service', 
		'FileUploader',
		function($scope, $cookies, $state, postService, FileUploader) {
			postService.getAllpost().then(
				function(res) {
					$scope.postList = res.data;
				},
				function(error) {
					console.error('error,',error);
			});


			var list = [];
			function save() {

				for(var i = 0; i < list.length; i++) {
					postService.createpost(list[i])
					.then(function(data) {
						$state.go('post-list');
					}, function(error) {
						console.error('error,',error)
					});
				}
			}

			$scope.postView = function(id) {
				$state.go('post-view', {'id': id});
			};

			$scope.uploader = new FileUploader();

			console.log('$cookies',$cookies.get('user'))

		}]);
		
});