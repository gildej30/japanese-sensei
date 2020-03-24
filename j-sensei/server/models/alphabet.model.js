const mongoose = require('mongoose');

const AlphabetSchema = mongoose.Schema({
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

module.exports.Alphabet = mongoose.model("Alphabet", AlphabetSchema);