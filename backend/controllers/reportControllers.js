const Store = require('../models/Store');
const StoreStatus = require('../models/StoreStatus');
const Timezone = require('../models/Timezone');
const { generateReport } = require('../utils/reportUtils');

const triggerReport = async (req, res) => {
    try {
        const reportId = await generateReport();
        res.json({ report_id: reportId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getReport = async (req, res) => {
    try {
        const { report_id } = req.params;
        const reportStatus = await checkReportStatus(report_id);
        res.json(reportStatus);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const checkReportStatus = async (reportId) => {
    if(reportId==='active'){
        console.log('report id found and running')
    }
    else{
        console.log('report id not found and inactive')
    }

};

module.exports = {
    triggerReport,
    getReport
};
