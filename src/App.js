import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import EventCard from './components/EventCard';
import EventOrganizers from './components/Event_Organizers/EventOrganizers'; 
import EventStatus from './components/Event_Status/EventStatus';
import Registrations from './components/Registrations/Registrations';
import Forms from './components/Forms/Forms';
import Account from './components/Account/Account';
import Dashboard from './components/Dashboard/Dashboard';
import EventOrganizersUpdate from './components/EventOrganizersUpdate/EventOrganizersUpdate';

function App() {
  const registrationData = [
    {
      name: 'Satyam Vatsa',
      email: 'satyam@example.com',
      event: 'Media Expo',
      phone: '9876543210',
      mode: 'Onsite',
    },
    {
      name: 'Khushal Hirani',
      email: 'khushal@example.com',
      event: 'Print Expo',
      phone: '9876543211',
      mode: 'Onsite',
    },
    {
      name: 'Harsh Bachchani',
      email: 'harsh@example.com',
      event: 'Tech Summit',
      phone: '9876543212',
      mode: 'Online',
    },
    {
      name: 'Ahmad Butt',
      email: 'ahmad@example.com',
      event: 'Health Conference',
      phone: '9876543213',
      mode: 'Uploaded',
    },
  ];
  const eventData = [
    {
      name: 'Media Expo',
      venue: 'Expo Center, Hall A',
      description: 'An exhibition for media professionals.',
      date: '2024-10-30',
    },
    {
      name: 'Print Expo Chennai',
      venue: 'Chennai Trade Center',
      description: 'A trade expo for printing and graphic design.',
      date: '2024-11-15',
    },
  ];
  const eventData1 = [
    {
      name: 'Media Expo',
      venue: 'Expo Center, Hall A',
      description: 'An exhibition for media professionals.',
      status : 'approved',
      date: '2024-10-30',
    },
    {
      name: 'Print Expo Chennai',
      venue: 'Chennai Trade Center',
      description: 'A trade expo for printing and graphic design.',
      status : 'pending',
      date: '2024-11-15',
    },
  ];
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <div className="overview-metrics">
                    <MetricCard title="Online Registrations" value="7,265" percentage="+11.02%" />
                    <MetricCard title="Onsite Registrations" value="3,671" percentage="-0.03%" />
                    <MetricCard title="New Registrations" value="156" percentage="+15.03%" />
                    <MetricCard title="Total Registered" value="9,318" percentage="+6.08%" />
                  </div>
                  <div className="charts">
                    <Dashboard/>
                  </div>
                  <div className="planning-section">
                    <h3>Planning</h3>
                    <div className="event-cards">
                      <EventCard title="Tech Innovators Summit" time="8:00 AM - 10:00 AM" />
                      <EventCard title="Annual Music Gala" time="3:00 PM - 4:00 PM" />
                      <EventCard title="AI & Robotics Fair" time="8:00 AM - 12:00 PM" />
                      <EventCard title="Global Health Conference" time="1:00 PM - 2:00 PM" />
                      <EventCard title="Youth Empowerment Summit" time="7:00 PM - 8:00 PM" />
                      <EventCard title="Cultural Heritage Day" time="8:00 AM - 12:00 PM" />
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/admin/event_organizers" element={<EventOrganizers events={eventData} />} /> {/* New Route */}
            <Route path="/admin/event_status" element={<EventStatus events={eventData1} />} /> {/* New Route */}
            <Route path="/admin/registrations" element={<Registrations registrations={registrationData} />} /> {/* New Route */}
            <Route path="/admin/forms" element={<Forms events={eventData1} />} /> {/* New Route */}
            <Route path="/admin/accounts" element={<Account />} /> {/* New Route */}
            <Route path="/admin/event_organizers/update" element={<EventOrganizersUpdate/>} /> {/* New Route */}

            

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
