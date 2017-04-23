angular.module('SmartHome.Auth')
    .service('authService', authService);

function authService($rootScope, $http, $cookieStore)  {
    return {
        login: login,
        logout: logout,
        setAuth: setAuth
    };

    function setAuth(state) {
        $rootScope.isAuth = state;
    }

    function login(data) {
        return $http.post('/login', data).then((response) => {
            if (response.data.token) {
                $http.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`};
                setAuth(true);
                $cookieStore.put('token', response.data.token);
                $rootScope.$broadcast('AuthEvent');
                return response
            }
        })
    }

    function logout() {
        return $http.post('/logout', $rootScope.user).then(() => {
            setAuth(false);
            $cookieStore.remove('token');
        })
    }

};