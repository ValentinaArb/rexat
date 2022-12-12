const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    name: {type: String, require: true},
    mail: {type: String, require: true},
    password: {type: String, require: true},
});

module.exports = mongoose.model('Task', TaskSchema)