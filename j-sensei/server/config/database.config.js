const mongoose = require('mongoose'),
database = 'Action' //name your DB here

mongoose.connect(`mongodb://localhost/${database}`, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => console.log("You are now inside the mainframe."))
    .catch(err => console.log(`ERROR ERROR ERROR: ${err}`))