import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClockInOut from './components/ClockInOut';
import EmployeeProfile from './components/EmployeeProfile';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<ClockInOut />} />
          <Route path="/employee/:id" element={<EmployeeProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;