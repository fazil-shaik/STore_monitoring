const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportControllers');

router.post('/trigger_report', reportController.triggerReport);
router.get('/get_report/:report_id', reportController.getReport);

module.exports = router;
