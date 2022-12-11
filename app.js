const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const mongoose = require("mongoose");

const IndexController = require("./controllers/index");
const StoriesController = require("./controllers/stories");

// Create Express Application.
const app = express();

// Set up mongoose connection.
const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", IndexController);
app.use("/api/stories", StoriesController);

module.exports = app;
