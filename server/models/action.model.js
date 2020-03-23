const mongoose = require('mongoose');

const ActionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please, enter the title"]
    }
}, {timestamps:true})

module.exports.Action = mongoose.model("Action", ActionSchema);