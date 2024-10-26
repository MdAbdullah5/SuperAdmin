import React from 'react';

function MetricCard({ title, value, percentage }) {
  return (
    <div className="metric-card">
      <h4>{title}</h4>
      <p>{value}</p>
      <small>{percentage}</small>
    </div>
  );
}

export default MetricCard;  