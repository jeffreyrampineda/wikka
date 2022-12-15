const mongoose = require("mongoose");

// Set up mongoose connection.
const connectionString = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connection.on(
  "error",
  console.error.bind(console, "mongodb: connection error")
);
mongoose.connection.once("open", () =>
  console.log("mongodb: connection established")
);

exports.init = function () {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
