require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

const mongoose = require('mongoose');
    path = require('path'),
    uri = process.env.PASS,
    dbConnectionUrl = `mongodb+srv://gildej30:${uri}@codingdojo-voxar.mongodb.net/Alphabet?retryWrites=true&w=majority`

mongoose.connect(dbConnectionUrl, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database"))
    .catch(err => console.log("Connection failed.", err))
