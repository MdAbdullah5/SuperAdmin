
import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="dashboard-title">Dashboard</div>
      <div className="header-actions">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="notification-icon">🔔</div>
      </div>
    </div>
  );
}

export default Header;