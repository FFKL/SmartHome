angular
    .module('SmartHome.Dashboard')
    .run(function (gridsterConfig) {
        gridsterConfig.resizable.enabled = false;
    });