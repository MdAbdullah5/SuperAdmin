import React from 'react';
import './Account.css'; // Import the CSS file

function Account() {
  return (
    <>
    <div className="account-container">
        <div className="account-actions">
          <button className="logout-btn">Logout</button>
          <button className="change-password-btn">Change Password</button>
        </div>
    </div>
    </>
  );
}

export default Account;