import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Sidebar from '../../component/Sidebar/Sidebar';

import "./UserLayout.css"

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <Header />  {/* Gọi Header */}
      <div className="user-body">
        <div className='user-sidebar'>
          <Sidebar/>
        </div>
        <main className="user-content">{children}</main>
      </div>
      <Footer />  {/* Gọi Footer */}
    </div>
  );
};

export default UserLayout;
