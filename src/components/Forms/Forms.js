import React , { useState } from 'react';
import './Forms.css';


function Forms({ events }) {
  const [newEventName, setNewEventName] = useState('');

  const handleInputChange = (event) => {
    setNewEventName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new event to the events list
    events.push({
      name: newEventName,
      date: '', // Add default date or handle it dynamically
      venue: '', // Add default venue or handle it dynamically
      status: 'Pending',
    });

    // Clear the form
    setNewEventName('');
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>Event Status</h1>
        <input type="search" placeholder="Search" />
      </div>

      {/* Event creation form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-event-name">New Event Name:</label>
        <input
          type="text"
          id="new-event-name"
          value={newEventName}
          onChange={handleInputChange}
          placeholder="Enter event name"
          required
        />
        <button type="submit">Create Event</button>
      </form>

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

export default Forms;