const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  description: { type: String, required: true },
  passages: { type: [String], required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

//Export model
module.exports = mongoose.model("Story", StorySchema);
