import React from 'react';
import SimpleChatbot from './SimpleChatbot';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <SimpleChatbot />
    </div>
  );
};

export default Layout;