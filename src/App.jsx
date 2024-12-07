import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './assets/Components/Home/components/DashbaordLayout';
import Dashboard from './assets/Components/Home/components/Dashbaord';
import Students from './assets/Components/Home/components/Students';
import Teacher from './assets/Components/Home/components/Teacher';
import Classes from './assets/Components/Home/components/Classes';
import Login from './assets/Components/Login/Login';
import Signup from './assets/Components/Signup.jsx/Signup';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected routes after login */}
        <Route path="/dashboardlayout" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="classes" element={<Classes />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
