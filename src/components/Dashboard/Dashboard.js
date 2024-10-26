import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
import './Dashboard.css'; // Ensure the correct path for your styles

// Sample data arrays
const lineData = [
  { month: 'Jan', thisEvent: 4000, lastEvent: 2400 },
  { month: 'Feb', thisEvent: 3000, lastEvent: 1398 },
  { month: 'Mar', thisEvent: 2000, lastEvent: 9800 },
  { month: 'Apr', thisEvent: 2780, lastEvent: 3908 },
  { month: 'May', thisEvent: 1890, lastEvent: 4800 },
  { month: 'Jun', thisEvent: 2390, lastEvent: 3800 },
  { month: 'Jul', thisEvent: 3490, lastEvent: 4300 },
];

// Sample data for Pie and Bar charts
const pieData = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 500 },
  { name: 'Group C', value: 800 },
  { name: 'Group D', value: 200 },


];

const barData1 = [
  { name: 'Linux', value: 24000 },
  { name: 'Mac', value: 13000 },
  { name: 'IOS', value: 31260 },
  { name: 'Android', value: 44923 },
  { name: 'Other', value: 9005 },

];



const COLORS = ['#1C1C1C99', '#B1E3FF', '#A1E3CB', '#A8C5DA'];
const smallBarColors = ['#95A4FC', '#BAEDBD', '#1C1C1C', '#B1E3FF', '#A8C5DA', '#A1E3CB'];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <section className="charts">
          {/* Line Chart */}
          <div className="chart-container line-chart">
            <h4>Total Users (This Event vs Last Event)</h4>
            <LineChart width={600} height={300} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="thisEvent" stroke="#8884d8" />
              <Line type="monotone" dataKey="lastEvent" stroke="#82ca9d" />
            </LineChart>
          </div>

          {/* Middle section with Pie Chart and Small Bar Chart side by side */}
          <div className="chart-row">
            <div className="chart-container">
              <h4>Traffic by Location</h4>
              <PieChart width={400} height={300}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={110}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  cornerRadius={7}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>   
            </div>

            <div className="chart-container">
              <h4>Traffic by Device</h4>
              <BarChart width={400} height={300} data={barData1}>
                <XAxis dataKey= "name" fontSize={12} axisLine={false} />
                <YAxis axisLine={false} tickFormatter={(value) => `${value / 1000}k`} ticks={[0, 10000, 20000, 30000, 40000, 50000]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" barSize={35} radius={[10, 10, 10, 10]}>
                  {barData1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={smallBarColors[index % smallBarColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
