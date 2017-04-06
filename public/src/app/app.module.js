angular.module('SmartHome',
    [
        'ngCookies',
        'ngStorage',
        'ngAnimate',
        'vAccordion',
        'SmartHome.Common',
        'SmartHome.Auth',
        'SmartHome.Dashboard'
    ]
);
angular.module('SmartHome.Common', ['ngRoute']);
angular.module('SmartHome.Auth', []);
angular.module('SmartHome.Dashboard', ['gridster']);