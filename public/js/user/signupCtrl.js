define(['./module'], function (module) {
	return module.controller('memory.signupCtrl', ['$scope','$stateParams','memory.userService',
		function($scope, $stateParams, userService) {
			
			$scope.signup = function() {
				userService.createUser($scope.user).then(
                    function(res) {
                        console.log('success,',res.data)
                        $cookies.putObject('user', res.data);
                        $rootScope.$broadcast('login');
                    },
                    function(error) {
                        console.error('error,',error);
                    });
			}

		}
	]);
});