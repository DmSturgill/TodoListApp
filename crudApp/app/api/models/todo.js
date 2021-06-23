const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
  num: Schema.Types.Number,
  text: Schema.Types.String,
  isFinished: Schema.Types.Boolean,
});

module.exports = mongoose.model("Todo", todoSchema);