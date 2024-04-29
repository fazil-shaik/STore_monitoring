const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  store_id: { type: Number, required: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model('Store', storeSchema);
