angular.module('SmartHome.Auth')
    .controller('AuthController', ['$rootScope', '$scope', '$http', 'AuthService',
        function ($rootScope, $scope, $http, AuthService) {
            $scope.login = login;
            $scope.logout = logout;
            $scope.register = register;
            $scope.user = {};

            function login(data) {
                $http.post('/login', data).then(function (response) {
                    if (response.data.token) {
                        AuthService.setAuth(true);
                        AuthService.setToken(response.data.token);
                        $rootScope.$broadcast('AuthEvent');
                        $scope.user = response;
                    }
                }, function (err) {
                    $scope.data = {};
                    $rootScope.message = err.data + ' Check your login/password';
                })
            }

            function logout() {
                $http.post('/logout', $rootScope.user).then(function () {
                    AuthService.setAuth(false);
                    AuthService.setToken({});
                    $scope.user = {};
                    $rootScope.message = 'You are logged out';
                })
            }
            
            function register($rootScope, $scope, $http) {
                $scope.user = {};
                $scope.reg = function(data) {
                    $http.post('/reg', data).then(function (response) {
                        $scope.data = {};
                        $rootScope.message = response.data;
                    }, function(err) {
                        $scope.data = {};
                        $rootScope.message = err.data + ' Registration error';
                    })
                };
            }
        }]
    );