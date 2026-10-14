import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProyectoBlob from './pages/ProyectoBlob';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProyectoBlob />} />
      </Routes>
    </Router>
  );
}

export default App;
