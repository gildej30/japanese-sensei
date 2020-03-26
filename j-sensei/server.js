const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors({credentials: true, origin: 'http://localhost:3000'}), 
    cookieParser(), 
    express.json(), 
    express.urlencoded({extended:true}),
    session({
        secret: "3d9s4#@4lk@12r",
        resave: false,
        saveUninitialized: true,
        maxAge: 300000
    })
);
require('./server/config/db.config');
require('./server/routes/hiragana.routes')(app);
require('./server/routes/user.routes')(app);