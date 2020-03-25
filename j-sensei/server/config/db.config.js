require('dotenv').config();

const mongoose = require('mongoose');
    path = require('path'),
    uri = process.env.PASS;

mongoose.connect(`mongodb+srv://gildej30:${uri}@codingdojo-voxar.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database"))
    .catch(err => console.log("Connection failed.", err))
