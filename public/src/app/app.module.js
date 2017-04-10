angular.module('SmartHome',
    [
        'ngCookies',
        'ngStorage',
        'ngAnimate',
        'vAccordion',
        'SmartHome.Common',
        'SmartHome.Auth',
        'SmartHome.Dashboard',
        'SmartHome.Logs'
    ]
);
angular.module('SmartHome.Common', ['ngRoute']);
angular.module('SmartHome.Auth', []);
angular.module('SmartHome.Dashboard', ['gridster']);
angular.module('SmartHome.Logs', []);