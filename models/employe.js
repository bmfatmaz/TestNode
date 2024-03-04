const mongo = require("mongoose");
const Schema = mongo.Schema;
const Employe = new Schema({
  fullName: String,
  rank: Number,
  salary: Number,
});
module.exports = mongo.model("employe", Employe);
