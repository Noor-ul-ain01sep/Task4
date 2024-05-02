//import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './Login/login';
import Landpage from './landing/landingPage'

const App = () => {
  const handleLoginSuccess = () => {
    // Redirect to the home page
    return <Navigate to="/Dashboard" />;
  };
  return (
    <Router>
      <Routes>
     
        <Route path='/' element={<Landpage/>}/>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
