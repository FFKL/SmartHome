angular
    .module('SmartHome.Dashboard')
    .controller('WidgetController', WidgetController);

function WidgetController($scope) {
    let widget = this;

    $scope.setWidget = setWidget;

    function setWidget(data) {
        widget.data = data;
    }
}