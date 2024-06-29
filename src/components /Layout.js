import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div>
      <Header logoText="My Logo" />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
