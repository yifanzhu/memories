define(['./module'], function (module) {
    return module.directive('memoryHeader', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/utils/nav.html',
            scope: {
                options: '='
            },
            controller: [
                '$scope',
                '$state',
                '$mdDialog',
                '$cookies',
                function ($scope, $state, $mdDialog, $cookies) {

                    var user = $cookies.get('user');
                    if(user) {
                        $scope.user = JSON.parse(user);
                    }

                    $scope.$on('login', function() {
                        var user = $cookies.get('user');
                        if(user) {
                            $scope.user = JSON.parse(user);
                        }
                    });

                    $scope.popLogin = function(ev) {
                        $mdDialog.show({
                          controller: 'memory.loginCtrl',
                          templateUrl: 'templates/user/login.html',
                          parent: angular.element(document.body),
                          targetEvent: ev,
                          clickOutsideToClose:true
                        })
                            .then(function(answer) {
                              $scope.status = 'You said the information was "' + answer + '".';
                            }, function() {
                              $scope.status = 'You cancelled the dialog.';
                            });
                      };

                    $scope.popSignUp = function(ev) {
                        $mdDialog.show({
                            controller: 'memory.signupCtrl',
                            templateUrl: 'templates/user/signup.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })
                            .then(function(answer) {
                                $scope.status = 'You said the information was "' + answer + '".';
                            }, function() {
                                $scope.status = 'You cancelled the dialog.';
                            });
                    };
                   

                    $scope.redirect = function(state) {
                        if(state === 'home') {                  
                            $state.go('home');

                        }
                        else if(state === 'post') {
                            $state.go('post-list');
                        }
                    };

                    $scope.signOut = function() {
                        $cookies.remove('user');
                        $scope.user = '';
                    };

                    $scope.scroll = function(id) {
                        var height = angular.element('#' + id)[0].offsetTop;
                        $('html,body').animate({scrollTop: height},400);
                    }

                }
            ]
        };
    }]);
});
