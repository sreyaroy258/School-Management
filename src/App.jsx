import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/Components/Login/Login';
import Dashbaord from './assets/Components/Home/components/Dashbaord';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* You can add other routes here */}
        <Route path="/Dashboard" element={<Dashbaord/>}/>
      </Routes>
    </Router>
  );
};

export default App;
