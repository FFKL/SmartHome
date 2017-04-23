module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const DeviceSchema = new Schema({
        type: String,
        name: String,
        isActive: Boolean,
        kind: String,
        unit: String,
        triggerClass: String,
        widget: {
            icon: String
        },
        logs: [
            {
                name: String,
                unit: String,
                data: [
                    [Number, Number]
                ]
            }
        ],
        data: {
            date: Number,
            value: Number,
            range: []
        },
        created: {type: Number, default: Date.now()}
    });

    mongoose.model('Device', DeviceSchema);
};