import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { AlmirahPage } from './pages/AlmirahPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/almirah/:almirahId" element={<AlmirahPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);