angular
    .module('SmartHome.Dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController() {
    let dashboard = this;
    dashboard.standardItems = [
        { sizeX: 2, sizeY: 1, row: 0, col: 0 },
        { sizeX: 2, sizeY: 2, row: 0, col: 2 },
        { sizeX: 1, sizeY: 1, row: 0, col: 4 },
        { sizeX: 1, sizeY: 1, row: 0, col: 5 },
        { sizeX: 2, sizeY: 1, row: 1, col: 0 },
        { sizeX: 1, sizeY: 1, row: 1, col: 4 },
        { sizeX: 1, sizeY: 2, row: 1, col: 5 },
    ];
}