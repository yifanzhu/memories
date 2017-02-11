define(['./module'], function (module) {
	return module.controller('memory.collection.listCtrl', ['$scope', '$cookies', '$state','memory.collection.service',
		function($scope, $cookies, $state, collectionService) {
		collectionService.getAllcollection().then(
			function(res) {
				$scope.collectionList = res.data;
			},
			function(error) {
				console.error('error,',error);
			});
			

			$scope.view = function(id) {
				$state.go('collection-view', {'id': id});
			};

			console.log('$cookies',$cookies.get('user'))

	}
	]);
});