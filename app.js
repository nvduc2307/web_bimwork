const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const router = require('./routes');
const db = require('./connect/db');
db.connect();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('randomCode'));
app.use(express.static(path.join(__dirname, 'public')));

router(app);

app.listen(port, ()=>{
    console.log(`listening port http://localhost:${port}`);
});
