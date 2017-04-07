angular
    .module('SmartHome.Dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $localStorage, backendService, $interval) {
    let dashboard = this;
    dashboard.interval = 1000;

    initDashboard();

    function initDashboard() {
        if ($localStorage.scheme) {
            $interval(loadWidgets, dashboard.interval);
        } else {
            loadDashboard();
        }
    }

    function loadWidgets() {
        backendService.getWidgets()
            .then(result => {
                dashboard.scheme = $localStorage.scheme;
                dashboard.widgets = result;
            });
    }

    function loadDashboard() {
        backendService.getDashboardScheme()
            .then(result => {
                $localStorage.scheme = result;
                loadWidgets()
            })
    }

    // $timeout(loadWidgets, 200);

    $scope.$watch('dashboard.scheme', newScheme => {
        if (newScheme) {
            $localStorage.scheme = newScheme
        }
    }, true);
}