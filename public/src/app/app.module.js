angular.module('SmartHome',
    [
        'ngCookies',
        'ngStorage',
        'ngAnimate',
        'vAccordion',
        'smart-table',
        'SmartHome.Common',
        'SmartHome.Auth',
        'SmartHome.Dashboard',
        'SmartHome.Logs',
        'SmartHome.Sensors'
    ]
);
angular.module('SmartHome.Common', ['ngRoute']);
angular.module('SmartHome.Auth', []);
angular.module('SmartHome.Dashboard', ['gridster']);
angular.module('SmartHome.Logs', []);
angular.module('SmartHome.Sensors', []);