import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutConMenuFinal = () => {
  return (
    <div>
      <h1>Menú Lateral</h1>
      <Outlet />
    </div>
  );
};

export default LayoutConMenuFinal;
