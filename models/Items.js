const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ItemSchema = Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
