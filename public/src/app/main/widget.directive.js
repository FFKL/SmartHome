angular
    .module('SmartHome.Dashboard')
    .directive('shWidget', shWidget);

function shWidget() {
    return {
        link: (scope, elem, attrs) => {
            scope.$watch(attrs, function () {
                scope.widget = angular.fromJson(attrs.widget);
            })
        },
        replace: true,
        templateUrl: 'templates/widget.html',
        restrict: 'E',
        controller: 'WidgetController'
    };
}