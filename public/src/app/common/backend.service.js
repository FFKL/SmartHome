angular
    .module('SmartHome.Common')
    .service('backendService', backendService);

function backendService($http) {
    return {
        getWidgets: getWidgets,
        getDashboardScheme: getDashboardScheme,
        getLogs: getLogs,
        getSensors: getSensors
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

    function getLogs() {
        return $http.get('/api/logs').then(response => {
            return response.data
        }, err => {
            //todo
        });
    }

    function getSensors() {
        return $http.get('/api/sensors').then(response => {
            return response.data
        }, err => {
            //todo
        });
    }
}