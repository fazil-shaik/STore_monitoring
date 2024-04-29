# Restaurant Uptime Monitoring System

This project provides backend APIs to monitor the uptime and downtime of restaurants based on periodic polls of their online status. It includes functionality to generate reports on uptime and downtime for specific time intervals.

## System Overview

The system consists of three main components:

1. **Backend Server**: Built using Node.js and Express.js, the backend server hosts the APIs for triggering report generation and retrieving report status.

2. **Database**: MongoDB is used as the database to store restaurant data and generated reports.

3. **Frontend Client**: A React.js frontend is provided to interact with the backend APIs and display the generated reports.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd restaurant-uptime-monitoring-system
```

Install dependencies for the backend and frontend:
bash

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Configure the backend server:
Create a .env file in the backend directory and set the following environment variables:
PORT=8000
MONGODB_URI=<mongodb-connection-string>


Start the backend server:

bash
Copy code
cd backend
npm start

Start the frontend development server:

bash
cd frontend
npm start
Open your browser and navigate to http://localhost:3000 to access the frontend client.


Usage

Trigger Report: Click the "Trigger Report" button in the frontend to generate a new report. Note the report ID displayed.
Get Report Status: Enter the report ID in the frontend and click the "Get Report Status" button to check the status of the report.
Once the report status changes to "Complete," the report data will be displayed in the frontend.
API Endpoints

POST /reports/trigger_report
Triggers the generation of a new report.

GET /reports/get_report?report_id=<reportId>
Returns the status of the specified report. If the report is complete, it also includes the report data.

Contributors

shaik fazil basha
