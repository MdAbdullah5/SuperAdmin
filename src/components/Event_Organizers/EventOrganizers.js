import React from 'react';
import './EventOrganizers.css';
import { useNavigate } from 'react-router-dom';
function EventOrganizers({ events }) {
  const navigate = useNavigate();

  const redirectUpdate = (eventId) => {
    navigate(`/admin/event_organizers/update`); // Redirect to a specific event update page
  };
  
  return (
    <div className="main-content">
      <div className="header">
        <h1>Event Organizers</h1>
        <input type="search" placeholder="Search" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Venue</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.venue}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td><span className="edit-icon" onClick={redirectUpdate}>✏️</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventOrganizers;
