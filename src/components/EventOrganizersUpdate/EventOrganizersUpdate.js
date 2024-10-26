import React, { useState } from 'react';
import './EventOrganizersUpdate.css'

function EventOrganizersUpdate() {
  const [formData, setFormData] = useState({
    name: 'Medio expo',
    venue: '9034664487',
    description: 'ahmedbutt7420@gmail.com',
    date: '01/04/27',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
  };

  return (
    <div className="event-organizers">
      <h2>Event Organizers</h2>
      <form onSubmit={handleSubmit}>
        <label>Events</label>
        

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Venue</label>
        <input type="text" name="venue" value={formData.venue} onChange={handleChange} />

        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />

        <label>Date</label>
        <input type="text" name="date" value={formData.date} onChange={handleChange} />

        <button type="submit">Update Changes</button>
      </form>
    </div>
  );
}

export default EventOrganizersUpdate;
