import React, { useState, useEffect } from 'react';
import './EventOrganizers.css';
import { useNavigate } from 'react-router-dom';

function EventOrganizers() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://127.0.0.1:8000/admin/event_organizers'); // Corrected fetch URL
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const redirectUpdate = (eventId) => {
    navigate('/admin/event_organizers/update');
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="header">
        <h1>Event Organizers</h1>
        <input 
          type="search" 
          placeholder="Search" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
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
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.venue}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>
                  <span 
                    className="edit-icon" 
                    onClick={() => redirectUpdate(event.id)} 
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter') redirectUpdate(event.id); }}
                  >
                    ✏️
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No events found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EventOrganizers;
