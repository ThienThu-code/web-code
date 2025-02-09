// src/layouts/AuthLayout/AuthLayout.jsx
import React from 'react';
//import './AuthLayout.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">{children}</div>
    </div>
  );
};

export default AuthLayout;
