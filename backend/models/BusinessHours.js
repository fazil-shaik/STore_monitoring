const mongoose = require('mongoose');

const businessHoursSchema = new mongoose.Schema({
  store_id: { type: Number, required: true },
  day_of_week: { type: Number, required: true },
  start_time_local: { type: String, required: true },
  end_time_local: { type: String, required: true }
});

module.exports = mongoose.model('BusinessHours', businessHoursSchema);
