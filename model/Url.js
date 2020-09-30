const mongoose = require('mongoose');

const Urlschema = mongoose.Schema({
  url: { type: String, required: true },
  shortUrl: { type: String },
  codeUrl: { type: String },
});

module.exports = mongoose.model('Url', Urlschema);
