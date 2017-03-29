angular
    .module('SmartHome.Dashboard')
    .run(function (gridsterConfig, backendService, $localStorage) {
        gridsterConfig.resizable.enabled = false;

        backendService.getDashboardScheme()
            .then(result => {
                $localStorage.scheme = result
            })
    });