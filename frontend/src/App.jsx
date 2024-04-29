// Report.js
import  { useState } from 'react';
import axios from 'axios';

const Report = () => {
  const [reportId, setReportId] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const triggerReport = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/trigger_report');
      setReportId(response.data.report_id);
    } catch (error) {
      console.error('Error triggering report:', error);
    } finally {
      setLoading(false);
    }
  };

  const getReportStatus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/get_report?report_id=${reportId}`);
      setReport(response.data);
    } catch (error) {
      console.error('Error getting report status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={triggerReport} disabled={loading}>Trigger Report</button>
      <br />
      {reportId && (
        <button onClick={getReportStatus} disabled={loading}>Get Report Status</button>
      )}
      <br />
      {loading && <p>Loading...</p>}
      {report && (
        <div>
          <h2>Report Data</h2>
          <table>
            <thead>
              <tr>
                <th>Store ID</th>
                <th>Uptime Last Hour (minutes)</th>
                <th>Uptime Last Day (hours)</th>
                <th>Uptime Last Week (hours)</th>
                <th>Downtime Last Hour (minutes)</th>
                <th>Downtime Last Day (hours)</th>
                <th>Downtime Last Week (hours)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{report.store_id}</td>
                <td>{report.uptime_last_hour}</td>
                <td>{report.uptime_last_day}</td>
                <td>{report.uptime_last_week}</td>
                <td>{report.downtime_last_hour}</td>
                <td>{report.downtime_last_day}</td>
                <td>{report.downtime_last_week}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Report;
