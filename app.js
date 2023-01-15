const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const StoriesRouter = require("./routes/stories.route");

// Create Express Application.
const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(StoriesRouter);

module.exports = app;
