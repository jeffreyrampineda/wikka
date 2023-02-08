const mongoose = require("mongoose");
const debug = require("debug")("wikka:database");

// Set up mongoose connection.
const connectionString = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connection.on("error", (err) => debug("Error: ", err));
mongoose.connection.once("open", () => debug("Connection established"));

async function main() {
  debug("Connecting...");
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  main,
};
