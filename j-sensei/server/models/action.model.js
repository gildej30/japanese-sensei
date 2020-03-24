const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({

},{timestamps:true})

const Pet = mongoose.model("Action", ACtionSchema);

module.exports = Action;

//be sure to change the word ACTION to a more fitting name 