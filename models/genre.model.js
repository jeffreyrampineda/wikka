const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
