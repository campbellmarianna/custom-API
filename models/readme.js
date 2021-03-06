const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReadmeSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  publications: { type: String, required: true },
});

module.exports = mongoose.model("Readme", ReadmeSchema);
