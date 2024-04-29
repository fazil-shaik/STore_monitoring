const Report = require('../models/Report');
const mongoose = require('mongoose');

const generateReport = async () => {
  try {
    const currentDate = new Date();
    const oneHourAgo = new Date(currentDate.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

    const reportData = await Report.aggregate([
      {
        $match: {
          timestamp_utc: { $gte: oneWeekAgo }
        }
      },
      {
        $group: {
          _id: null,
          uptime_last_hour: {
            $sum: {
              $cond: [{ $eq: ["$status", "active"] }, 1, 0]
            }
          },
          uptime_last_day: {
            $sum: {
              $cond: [{ $eq: ["$status", "active"] }, 1, 0]
            }
          },
          uptime_last_week: {
            $sum: {
              $cond: [{ $eq: ["$status", "active"] }, 1, 0]
            }
          },
          downtime_last_hour: {
            $sum: {
              $cond: [{ $eq: ["$status", "inactive"] }, 1, 0]
            }
          },
          downtime_last_day: {
            $sum: {
              $cond: [{ $eq: ["$status", "inactive"] }, 1, 0]
            }
          },
          downtime_last_week: {
            $sum: {
              $cond: [{ $eq: ["$status", "inactive"] }, 1, 0]
            }
          }
        }
      }
    ]);

    const [reportStats] = reportData;

    const report = await Report.create({
      store_id: 'sample_store',
      uptime_last_hour: reportStats.uptime_last_hour,
      uptime_last_day: reportStats.uptime_last_day,
      uptime_last_week: reportStats.uptime_last_week,
      downtime_last_hour: reportStats.downtime_last_hour,
      downtime_last_day: reportStats.downtime_last_day,
      downtime_last_week: reportStats.downtime_last_week
    });

    return report;
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};

module.exports = {
  generateReport
};
