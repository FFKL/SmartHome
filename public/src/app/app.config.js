angular.module('SmartHome.Common')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: '/templates/dashboard.html',
                controller: 'DashboardController as dashboard'
            })
            .when('/sensors', {
                templateUrl: '/templates/sensors.html'
            })
            .when('/triggers', {
                templateUrl: '/templates/triggers.html'
            })
            .when('/logs', {
                templateUrl: '/templates/logs.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function ($rootScope, $location, $cookieStore, $http, authService) {
            let token = $cookieStore.get('token');
            if (token) {
                $http.defaults.headers.common = {'Authorization': `Bearer ${token}`};
                authService.setAuth(true);
                authService.setToken(token);
            }
        }
    );
