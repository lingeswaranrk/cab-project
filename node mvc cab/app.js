const express = require('express');
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
//const rideRoutes = require('./routes/rideRoutes');
const accountRoutes = require('./routes/accountRoutes');
const download = require('./routes/download');

//const cabRoutes = require('./routes/cabRoutes');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/autenticationMiddlewares');

// Creating an express app.
const app = express();
app.use(cookieParser());

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

//app.use(rideRoutes);
app.use(accountRoutes);
app.use(download);
//app.use(cabRoutes);

function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(80);