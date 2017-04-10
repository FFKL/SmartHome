angular
    .module('SmartHome.Sensors')
    .controller('SensorsController', SensorsController);

function SensorsController(backendService) {
    let sensorsVm = this;

    getSensors();

    function getSensors() {
        backendService.getSensors()
            .then(result => {
                sensorsVm.items = result;
            })
    }
}