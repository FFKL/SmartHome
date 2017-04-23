angular.module('SmartHome.Common')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: '/templates/dashboard.html',
                controller: 'DashboardController as dashboardVm'
            })
            .when('/sensors', {
                templateUrl: '/templates/sensors.html',
                controller: 'SensorsController as sensorsVm'
            })
            .when('/triggers', {
                templateUrl: '/templates/triggers.html'
            })
            .when('/logs', {
                templateUrl: '/templates/logs.html',
                controller: 'LogsController as logsVm'
            })
            .otherwise({
                redirectTo: '/'
            });
        // $locationProvider.html5Mode(true)
    })
    .run(function ($rootScope, $location, $cookieStore, $http, authService) {
            let token = $cookieStore.get('token');
            if (token) {
                $http.defaults.headers.common = {'Authorization': `Bearer ${token}`};
                authService.setAuth(true);
            }
        }
    );
