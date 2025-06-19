import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard'; // componente hijo de ejemplo
import Investigaciones from './components/Investigaciones'; // otro hijo

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="investigaciones" element={<Investigaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
