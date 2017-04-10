angular
    .module('SmartHome.Logs')
    .controller('LogsController', LogsController);

function LogsController(backendService) {
    let logs = this;

    getLogs();

    function getLogs() {
        backendService.getLogs()
            .then(result => {
                logs.panes = result;
            })
    }
}