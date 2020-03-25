const mongoose = require('mongoose');

const HiraganaSchema = mongoose.Schema({
    hiragana:{
        type:String,
        required:[true, "Hiragana is required!"]
    },
    katakana:{
        type:String,
        required:[true, "Katakana is required!"]
    },
    romanji:{
        type:String,
        required:[true, "Romanji is required!"]
    }
})

module.exports.Hiragana = mongoose.model("Hiragana", HiraganaSchema);