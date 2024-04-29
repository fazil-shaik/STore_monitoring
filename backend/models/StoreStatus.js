const mongoose = require('mongoose');

const storeStatusSchema = new mongoose.Schema({
  store_id: { type: Number, required: true },
  timestamp_utc: { type: Date, required: true },
  status: { type: String, enum: ['active', 'inactive'], required: true }
});

module.exports = mongoose.model('StoreStatus', storeStatusSchema);
