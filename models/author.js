const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name.
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a last name or first name
  // We want to make sure we handle the exception by returning an "N/A" string for that case.
  var fullname = "";
  if (this.first_name && this.last_name) {
    fullname = this.last_name + ", " + this.first_name;
  } else {
    fullname = this.first_name || this.last_name || "N/A";
  }
  return fullname;
});

// Virtual for author's lifespan.
AuthorSchema.virtual("lifespan").get(function () {
  var lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += this.date_of_death.getYear();
  }
  return lifetime_string;
});

AuthorSchema.set("toJSON", { virtuals: true });

// Export model.
module.exports = mongoose.model("Author", AuthorSchema);
