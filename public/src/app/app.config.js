angular.module('SmartHome.Main')
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider
            .when('/main', {
                templateUrl: '/templates/main.html'
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
            })
    }]);
