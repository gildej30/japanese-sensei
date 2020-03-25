const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}), 
    cookieParser(), 
    express.json(), 
    express.urlencoded({extended:true})
);
require('./server/config/db.config');
require('./server/routes/hiragana.routes')(app);
require('./server/routes/user.routes')(app);