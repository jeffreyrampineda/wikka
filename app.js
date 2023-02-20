const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const createError = require("http-errors");

const StoriesRouter = require("./routes/stories.route");

// Create Express Application.
const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(StoriesRouter);

app.use(function (req, res, next) {
  return next(createError(404));
});

module.exports = app;
