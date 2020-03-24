const mongoose = require('mongoose');

const HiraganaTestSchema = mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please enter the test question"]
    },
    a:{
        type:String,
        required: [true, "A is required"],
        isCorrect: false
    },
    b:{
        type:String,
        required: [true, "B is required"],
        isCorrect: false
    },
    c:{
        type:String,
        required: [true, "C is required"],
        isCorrect: false
    }
}, { timestamps: true })

module.exports.HiraganaTest = mongoose.model("HiraganaTest", HiraganaTestSchema);