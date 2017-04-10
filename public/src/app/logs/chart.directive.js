angular
    .module('SmartHome.Logs')
    .directive('shChart', shChart);

function shChart() {
    return {
        scope: {
            data: '='
        },
        replace: true,
        templateUrl: 'templates/chart.html',
        restrict: 'E',
        controller: 'ChartController',
        controllerAs: 'chart',
        bindToController: true
    };
}