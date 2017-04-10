angular
    .module('SmartHome.Logs')
    .controller('ChartController', ChartController);

function ChartController($scope, $element, chartsBuilderService) {
    let chartVm = this;
    
    chartVm.$postLink = $postLink;
    function $postLink() {
        let data = $scope.chart.data;
        let svgElem = $element.find('svg');
        let options = {
            width: 960,
            height:300,
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        };
        chartsBuilderService.buildLinearChart(svgElem, data, options);

        $scope.$on('$destroy', function() {
            console.log("destroy");
        });
    }
}