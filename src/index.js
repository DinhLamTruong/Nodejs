'use strict'
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middlwares/sortMiddleware')


const db = require('./congfig/db');
const app = express();
const port = 3000
//connect db
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./helpers/handlebars')
});

//custom middlewares
app.use(sortMiddleware)


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(methodOverride('_method'))

route(app);

app.listen(port, () => console.log(`app running at http://localhost:${port}`));
