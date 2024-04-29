const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  store_id: {
    type: String,
    required: true
  },
  uptime_last_hour: {
    type: Number,
    required: true
  },
  uptime_last_day: {
    type: Number,
    required: true
  },
  uptime_last_week: {
    type: Number,
    required: true
  },
  downtime_last_hour: {
    type: Number,
    required: true
  },
  downtime_last_day: {
    type: Number,
    required: true
  },
  downtime_last_week: {
    type: Number,
    required: true
  }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
