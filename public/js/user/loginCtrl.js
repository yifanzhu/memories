define(['./module'], function (module) {
	return module.controller('memory.loginCtrl', [
	    '$rootScope',
		'$scope',
        '$cookies',
        '$stateParams',
        '$mdDialog',
        'memory.userService',
		function($rootScope, $scope, $cookies, $stateParams, $mdDialog, userService) {

			$scope.cancel = function() {
                $mdDialog.cancel();
            };

			$scope.login = function() {
				userService.findUser($scope.user).then(
                    function(res) {
                        $cookies.putObject('user', res.data);
                        $rootScope.$broadcast('login');
                    },
                    function(error) {
                        console.error('error,',error);
                    });
                $mdDialog.cancel();
			}

		}
	]);
});