const mongoose = require('mongoose');

const Urlschema = mongoose.Schema({
  url: { type: String, required: true },
  shortUrl: { tyepe: String },
});

module.exports = mongoose.model('Url', Urlschema);
