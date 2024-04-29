const mongoose = require('mongoose');

const timezoneSchema = new mongoose.Schema({
  store_id: { type: Number, required: true },
  timezone_str: { type: String, required: true }
});

module.exports = mongoose.model('Timezone', timezoneSchema);
