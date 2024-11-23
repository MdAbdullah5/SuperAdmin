import React, { useEffect, useState } from 'react';
import './EventStatus.css';
import { useNavigate } from 'react-router-dom';

function EventStatus() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Fetch event status data from FastAPI
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://127.0.0.1:8000/admin/event_status');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const redirectstatusUpdate = async (eventId) => {
    // Fetch event details from FastAPI for the specific event
    const response = await fetch(`http://127.0.0.1:8000/admin/event_status`);
    const eventData = await response.json();

    // Navigate to the update page and pass the event data
    navigate(`/admin/event_status/update`, { state: eventData });
  };

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
                <span className="edit-icon" onClick={() => redirectstatusUpdate(event.id)}>✏️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventStatus;
