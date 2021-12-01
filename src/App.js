import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import SideNavbar from './components/SideNavbar/sideNavbar';
import Dashboard from './components/Dashboard/dashboard';

import { Routes, Route, HashRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <SideNavbar />
      <div className='container-fluid'>
        <Navbar />
      </div>
      <div className='body-wrapper'>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
