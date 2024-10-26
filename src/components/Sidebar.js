//import { Link } from "react-router-dom";
import './Sidebar.css'
function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar-item" id='name'>Admin</div>
        <div className="sidebar-item"><a href="\">Dashboard</a></div>
        <div className="sidebar-item"><a href="\admin\event_organizers">Event Organizers</a></div>
        <div className="sidebar-item"><a href="\admin\event_status">Event Status</a></div>
        <div className="sidebar-item"><a href="\admin\registrations">Registrations</a></div>
        <div className="sidebar-item"><a href="\admin\forms">Forms</a></div>
        <div className="sidebar-item"><a href="\admin\accounts">Accounts</a></div>
        <div className="sidebar-item"><a href="\admin\settings">Settings</a></div>
      </div>
    );
  }
  
  export default Sidebar;