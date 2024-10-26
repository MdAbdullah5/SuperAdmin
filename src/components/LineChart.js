import React from 'react';

function LineChart() {
  return (
    <div className="chart-container">
      <h4>Total Users</h4>
      {/* You can integrate any chart library like Chart.js here */}
      <canvas id="lineChart"></canvas>
    </div>
  );
}

export default LineChart;