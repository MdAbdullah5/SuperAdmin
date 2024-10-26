import React from 'react';
import './EventStatus.css';

function EventStatus({ events }) {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Event Status</h1>
        <input type="search" placeholder="Search" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date || 'N/A'}</td>
              <td>{event.venue || 'N/A'}</td>
              <td>
                <div className="status">
                  <span className={event.status === 'Pending' ? 'pending-icon' : ''}>
                    {event.status === 'Pending' ? '⏳' : ''}
                  </span>
                  {event.status || 'N/A'}
                </div>
              </td>
              <td className="actions">
                <span className="edit-icon">✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventStatus;
