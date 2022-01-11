import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';

import ParentComp from './ParentComp';
export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ParentComp />
      
    </div>
  );
}
