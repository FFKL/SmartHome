angular
    .module('SmartHome.Auth')
    .controller('AuthController', AuthController);

function AuthController ($rootScope, authService) {
    let auth = this;
    auth.login = login;
    auth.logout = logout;
    // auth.register = register;
    auth.user = {};

    function login(data) {
        authService.login(data).then(
            res => {auth.user = res.data},
            err => {$rootScope.message = err.data + ' Check your login/password'}
        )
    }

    function logout() {
        authService.logout().then(() => {
            $rootScope.message = 'You are logged out';
        })
    }

    /*function register($rootScope, auth, $http) {
        auth.user = {};
        auth.reg = (data) => {
            $http.post('/reg', data).then((response) => {
                auth.data = {};
                $rootScope.message = response.data;
            }, (err) => {
                auth.data = {};
                $rootScope.message = err.data + ' Registration error';
            })
        };
    }*/
}