angular
    .module('SmartHome.Auth')
    .controller('AuthController', AuthController);

function AuthController ($rootScope, $http, $cookieStore, authService) {
    let auth = this;
    auth.login = login;
    auth.logout = logout;
    auth.register = register;
    auth.user = {};

    function login(data) {
        $http.post('/login', data).then((response) => {
            if (response.data.token) {
                authService.setAuth(true);
                authService.setToken(response.data.token);
                $cookieStore.put('token', response.data.token);
                $rootScope.$broadcast('AuthEvent');
                auth.user = response;
            }
        }, (err) => {
            auth.data = {};
            $rootScope.message = err.data + ' Check your login/password';
        })
    }

    function logout() {
        $http.post('/logout', $rootScope.user).then(() => {
            authService.setAuth(false);
            authService.setToken({});
            $cookieStore.remove('token');
            auth.user = {};
            $rootScope.message = 'You are logged out';
        })
    }

    function register($rootScope, auth, $http) {
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
    }
};