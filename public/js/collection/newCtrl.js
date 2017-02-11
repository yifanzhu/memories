define(['./module'], function (module) {
	return module.controller('memory.collection.newCtrl', ['$scope', '$cookies', '$state', 'memory.collection.service',
		function($scope, $cookies, $state, collectionService) {


			$scope.collection = {};

			var user = $cookies.get('user');
			if(user) {
				$scope.collection.userId = JSON.parse(user)._id;
				$scope.user = JSON.parse(user);
			}
			
			$scope.create = function() {
				collectionService.createCollection($scope.collection)
					.then(function(data) {
						$state.go('collections');
					}, function(error) {
						console.error('error,',error)
					});
			}

		}
	]);
});
