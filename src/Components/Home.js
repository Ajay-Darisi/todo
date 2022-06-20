import React from 'react';
import './Home.css';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import SideNav from './SideNav';
import Today from './Tasks/Today';
import Tommorow from './Tasks/Tommorow';
import Overdue from './Tasks/Overdue';
import Personal from './Tasks/Personal';
import HomeTask from './Tasks/HomeTask.js';
import Office from './Tasks/Office';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <Nav />
      </div>
      <div className="body">
        <div className="left">
          <SideNav />
        </div>
        <div className="right">
          <Routes>
            <Route path="/*" element={<Today />} />
            <Route path="/tomorrow" element={<Tommorow />} />
            <Route path="/overdue" element={<Overdue />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/home" element={<HomeTask />} />
            <Route path="/office" element={<Office />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home