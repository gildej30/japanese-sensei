const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors')
    server = app.listen(port,() => console.log(`listening on port ${port}`));

app.use(cors(), express.json(), express.urlencoded({extended:true}))

require('./server/config/database.config');
require('./server/routes/action.routes')(app);