const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const route = require('./routes');

    app.use(express.static(path.join(__dirname, 'public')));

//Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
    route(app);

app.listen(port, () => console.log(`Listening at http://localhost:3000`));
