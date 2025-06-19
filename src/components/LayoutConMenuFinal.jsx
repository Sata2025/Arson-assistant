import React from 'react';
import { Outlet } from 'react-router-dom';
import './LayoutConMenuFinal.css';

const LayoutConMenuFinal = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">Arson Assistant</h2>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Investigaciones</a></li>
            <li><a href="#">Predicción</a></li>
            <li><a href="#">Reportes</a></li>
            <li><a href="#">Configuración</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutConMenuFinal;