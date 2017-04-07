angular
    .module('SmartHome.Common')
    .service('backendService', backendService);

function backendService($http) {
    return {
        getWidgets: getWidgets,
        getDashboardScheme: getDashboardScheme
    };

    function getDashboardScheme() {
        return $http.get('/api/options/scheme').then(response => {
            return response.data
        }, err => {
            //todo
        });
    }

    function getWidgets() {
        return $http.get('/api/widgets').then(response => {
            return response.data
        }, err => {
            //todo
        });
    }
}