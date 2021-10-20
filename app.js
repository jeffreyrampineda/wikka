const express = require('express');
const logger = require('morgan');

// Controllers.
const indexController = require('./controllers/index');

// Create Express Application.
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexController);

module.exports = app;
