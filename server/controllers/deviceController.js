const mongoose = require('mongoose');
const Device = mongoose.model('Device');

module.exports = {
    get(req, res) {
        Device.find((err, devices) => {
            if (!err) {
                res.send(devices);
            } else {
                res.status(500).send({message: 'Server error'})
            }
        })
    },
    create(req, res) {
        console.log(req.body);
        let device = new Device(req.body);
        device.save(err => {
            if (!err) {
                res.send({message: 'Device updated'})
            } else {
                res.status(500).send({message: 'Server error'})
            }
        })
        /*let newDevice = {
            type: req.body.type,
            name: req.body.deviceName,
            kind: req.body.kind,
            isActive: req.body.isActive,
            unit: req.body.unit,
            widget: {
                icon: req.body.icon
            }
        };
        newDevice.type = req.body.type;
        if (newDevice.type === 'trigger') {
            newDevice.class = req.body.class;
            newDevice.data = {
                range: req.body.range
            }
        }
        let device = new Device({
            type: req.body.type,
            name: req.body.deviceName,
            isActive: req.body.isActive,
            kind: req.body.kind,
            unit: req.body.unit,
            triggerClass: req.body.triggerClass,
            widget: {
                icon: req.body.icon
            },
            logs: [
                {
                    name: req.body.logName,
                    unit: req.body.unit,
                    data: []
                }
            ],
            data: {}
        });
        device.save(err => {
            if (!err) {
                console.log('horray!')
            } else {

            }
        })*/
    },
    update(req, res) {

    },
    delete(req, res) {
        Device.findById(req.params.id, (err, device) => {
            if (!device) {
                res.status(404).send({message: 'Not found'})
            } else {
                device.remove(err => {
                    if (!err) {
                        res.send({message: 'Device deleted'})
                    } else {
                        res.status(500).send({message: 'Server error'})
                    }
                })
            }
        })
    }
};