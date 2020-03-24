const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jsensei_db", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connected to database"))
    .catch(err => console.log("Connection failed.", err))