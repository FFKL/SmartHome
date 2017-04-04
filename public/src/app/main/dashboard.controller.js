angular
    .module('SmartHome.Dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $localStorage, backendService) {
    let dashboard = this;

    if ($localStorage.scheme) {
        dashboard.scheme = $localStorage.scheme;
        loadWidgets();
    } else {
        loadDashboard();
    }

    function loadWidgets() {
        backendService.getWidgets()
            .then(result => {
                dashboard.widgets = result
            });
    }

    function loadDashboard() {
        backendService.getDashboardScheme()
            .then(result => {
                $localStorage.scheme = result;
                return backendService.getWidgets()
            })
            .then(result => {
                dashboard.scheme = $localStorage.scheme;
                dashboard.widgets = result
            });
    }

    $scope.$watch(scope => {
        return scope.dashboard.scheme;
    }, newScheme => {
        $localStorage.scheme = newScheme
    }, true);
}