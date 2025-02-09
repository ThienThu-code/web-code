import React from "react";
import { FaHome, FaUser, FaCog, FaUsers, FaTools } from "react-icons/fa"; // Import các icon từ react-icons
import "./Sidebar.css"; // Import tệp CSS của Sidebar

const Sidebar = () => {
  // Lấy role từ localStorage
  const role = localStorage.getItem('role');

  return (
    <div className="sidebar">
      <ul className="menu">
        {/* Điều kiện hiển thị menu cho role "user" */}
        {role === "user" && (
          <>
            <li>
              <a href="/user/home">
                <FaHome className="icon" /> {/* Icon Home */}
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li>
              <a href="/user/history">
                <FaUser className="icon" /> {/* Icon Lịch sử điểm danh */}
                <span className="menu-text">Lịch sử điểm danh</span>
              </a>
            </li>
            <li>
              <a href="/user/service">
                <FaCog className="icon" /> {/* Icon Dịch vụ */}
                <span className="menu-text">Dịch vụ</span>
              </a>
            </li>
            <li>
              <a href="/user/request">
                <FaCog className="icon" /> {/* Icon Dịch vụ */}
                <span className="menu-text">Nghỉ phép</span>
              </a>
            </li>
          </>
        )}

        {/* Điều kiện hiển thị menu cho role "manager" */}
        {role === "manager" && (
          <>
            <li>
              <a href="/manager/home">
                <FaHome className="icon" />
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li>
              <a href="/manager/history">
                <FaUser className="icon" />
                <span className="menu-text">Lịch sử điểm danh</span>
              </a>
            </li>
            <li>
              <a href="/manager/service">
                <FaCog className="icon" />
                <span className="menu-text">Dịch vụ</span>
              </a>
            </li>
            <li>
              <a href="/manager/request">
                <FaUsers className="icon" /> {/* Icon Báo cáo */}
                <span className="menu-text">Nghỉ phép</span>
              </a>
            </li>
            <li>
              <a href="/manager/reports">
                <FaUsers className="icon" /> {/* Icon Báo cáo */}
                <span className="menu-text">Báo cáo</span>
              </a>
            </li>
          </>
        )}

        {/* Điều kiện hiển thị menu cho role "admin" */}
        {role === "admin" && (
          <>
            <li>
              <a href="/admin/home">
                <FaHome className="icon" />
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li>
              <a href="/admin/history">
                <FaUser className="icon" />
                <span className="menu-text">Lịch sử điểm danh</span>
              </a>
            </li>
            <li>
              <a href="/admin/service">
                <FaCog className="icon" />
                <span className="menu-text">Dịch vụ</span>
              </a>
            </li>
            <li>
              <a href="/admin/request">
                <FaTools className="icon" /> {/* Icon Cài đặt hệ thống */}
                <span className="menu-text">Nghỉ phép</span>
              </a>
            </li>
            <li>
              <a href="/admin/manage">
                <FaUsers className="icon" /> {/* Icon Quản lý người dùng */}
                <span className="menu-text">Quản lý người dùng</span>
              </a>
            </li>
            <li>
              <a href="/admin/settings">
                <FaTools className="icon" /> {/* Icon Cài đặt hệ thống */}
                <span className="menu-text">Cài đặt hệ thống</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
