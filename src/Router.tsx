import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Importing pages to assign routes
import Home from './pages/Home';
import Projects from './pages/Projects';


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<Projects />} />
    </Routes>
  );
}