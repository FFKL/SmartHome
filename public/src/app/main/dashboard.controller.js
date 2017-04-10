angular
    .module('SmartHome.Dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $localStorage, backendService, $interval, $location, $route) {
    let dashboardVm = this;
    dashboardVm.interval = 1000;

    initDashboard();

    function initDashboard() {
        if ($localStorage.scheme) {
            loadWidgets();
        } else {
            loadDashboard();
        }
    }

    function loadWidgets() {
        backendService.getWidgets()
            .then(result => {
                dashboardVm.scheme = $localStorage.scheme;
                dashboardVm.widgets = result;
            });
    }

    function loadDashboard() {
        backendService.getDashboardScheme()
            .then(result => {
                $localStorage.scheme = result;
                loadWidgets()
            })
    }

    $interval(loadWidgets, dashboardVm.interval);


    $scope.$watch('dashboardVm.scheme', newScheme => {
        if (newScheme) {
            $localStorage.scheme = newScheme
        }
    }, true);
}