import React from 'react';
import Navbar from '../navbar/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="layout">
    <Navbar />
    <Outlet />
  </div>
);


export default Layout;
