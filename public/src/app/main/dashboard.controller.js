angular
    .module('SmartHome.Dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $localStorage, backendService) {
    let dashboard = this;

    if ($localStorage.scheme) {
        dashboard.scheme = $localStorage.scheme;
        loadWidgets();
    }

    function loadWidgets() {
        backendService.getWidgets()
            .then(function (result) {
                dashboard.widgets = result
            });
    }

    $scope.$watch(function (scope) {
        return scope.dashboard.scheme;
    }, function(newScheme){
        $localStorage.scheme = newScheme
    }, true);
}