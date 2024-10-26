import React from 'react';
import './Registrations.css';

function Registrations({ registrations }) {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Registrations</h1>
        <input type="search" placeholder="Search" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
            <th>Phone No.</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td>{registration.name}</td>
              <td>{registration.email || 'N/A'}</td>
              <td>{registration.event || 'N/A'}</td>
              <td>{registration.phone || 'N/A'}</td>
              <td className="mode">
                {registration.mode === 'Onsite' && (
                  <div className="onsite">
                    <span className="onsite-icon">📍</span> Onsite
                  </div>
                )}
                {registration.mode === 'Online' && (
                  <div className="online">
                    <span className="online-icon">💻</span> Online
                  </div>
                )}
                {registration.mode === 'Uploaded' && (
                  <div className="uploaded">
                    <span className="uploaded-icon">⬆️</span> Uploaded
                  </div>
                )}
                {registration.mode === 'Onsite' ? 'Onsite' : registration.mode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registrations;
