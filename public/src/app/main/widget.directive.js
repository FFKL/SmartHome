angular
    .module('SmartHome.Dashboard')
    .directive('shWidget', shWidget);

function shWidget() {
    return {
        link: (scope, elem, attrs) => {

        },
        scope: {
            info: '='
        },
        replace: true,
        templateUrl: 'templates/widget.html',
        restrict: 'E',
        controller: 'WidgetController',
        controllerAs: 'widget',
        bindToController: true
    };
}