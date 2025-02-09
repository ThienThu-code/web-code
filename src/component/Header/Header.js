import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Thay vì useHistory, sử dụng useNavigate trong react-router-dom v6
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // Trạng thái cho Notification
  const [notificationSettings, setNotificationSettings] = useState({
    push: true,
    sms: false,
    promotional: false,
  });

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleNotificationSetting = (type) => {
    const updatedSettings = { ...notificationSettings };

    if (type === 'push') {
      updatedSettings.push = !notificationSettings.push;
    } else if (type === 'sms') {
      updatedSettings.sms = !notificationSettings.sms;
    } else if (type === 'promotional') {
      updatedSettings.promotional = !notificationSettings.promotional;
    }

    setNotificationSettings(updatedSettings);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-links">
        <div className="dropdown">
          <div className="header-link" onClick={toggleDropdown}>
            User
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/user/profile" className="dropdown-item">Profile Information</a>
              <a href="/user/changepassword" className="dropdown-item">Change Password</a>
              <a href="/user/service" className="dropdown-item">Payment Method</a>
              <a href="/user/location" className="dropdown-item">Locations</a>

              <div className="notification-section">
                <div className="dropdown-item notification-header" onClick={toggleNotifications}>
                  Notification
                </div>
                {notificationsOpen && (
                  <div className="notification-settings">
                    <div className="notification-setting">
                      <label>
                        <input
                          type="checkbox"
                          checked={notificationSettings.push}
                          onChange={() => toggleNotificationSetting('push')}
                        />
                        Push Notification
                      </label>
                    </div>
                    <div className="notification-setting">
                      <label>
                        <input
                          type="checkbox"
                          checked={notificationSettings.sms}
                          onChange={() => toggleNotificationSetting('sms')}
                        />
                        SMS Notification
                      </label>
                    </div>
                    <div className="notification-setting">
                      <label>
                        <input
                          type="checkbox"
                          checked={notificationSettings.promotional}
                          onChange={() => toggleNotificationSetting('promotional')}
                        />
                        Promotional Notification
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <a href="/rate-us" className="dropdown-item">Rate us</a>
              <a href="/faq" className="dropdown-item">FAQ</a>
              <a href="/" className="dropdown-item" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
