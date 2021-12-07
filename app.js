const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

// Controllers.
const IndexController = require('./controllers/index');
const StoriesController = require('./controllers/stories');

// Create Express Application.
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', IndexController);
app.use('/api/stories', StoriesController);

module.exports = app;
