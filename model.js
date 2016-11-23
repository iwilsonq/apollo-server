const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresidentSchema = new Schema({
  name: String,
  party: String,
  term: String
});

const President = mongoose.model('President', PresidentSchema);

module.exports = President;
