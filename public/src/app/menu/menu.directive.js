angular
    .module('SmartHome.Common')
    .directive('shMenu', shMenu);

function shMenu() {
    return {
        scope: {},
        replace: true,
        templateUrl: 'templates/menu.html',
        restrict: 'E',
        controller: 'MenuController',
        controllerAs: 'menuVm',
        bindToController: true
    };
}