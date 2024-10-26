import React from 'react';

function EventCard({ title, time }) {
  return (
    <div className="event-card">
      <h5>{title}</h5>
      <p>{time}</p>
    </div>
  );
}

export default EventCard;