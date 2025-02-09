import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicePlans.css';

const ServicePlans = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // Chuyển hướng đến trang thanh toán và truyền thông tin gói dịch vụ đã chọn
    navigate('/user/payment', { state: { plan } });
  };

  return (
    <div className="service-plans-container">
      <h2 className="service-plans-title">Các Gói Dịch Vụ Điểm Danh</h2>
      
      <div className="service-plans">
        {/* Gói Cơ Bản */}
        <div className="service-plan">
          <h3 className="plan-title">Gói Cơ Bản</h3>
          <p className="plan-price">Miễn phí</p>
          <ul className="plan-features">
            <li>Điểm danh tự động theo thời gian hoặc mã QR</li>
            <li>Danh sách học viên hiện có</li>
            <li>Lịch sử điểm danh cơ bản</li>
            <li>Thống kê điểm danh cơ bản</li>
          </ul>
          <button className="select-plan-btn" onClick={() => handleSelectPlan('Basic')}>
            Chọn Gói
          </button>
        </div>

        {/* Gói Tiêu Chuẩn */}
        <div className="service-plan">
          <h3 className="plan-title">Gói Tiêu Chuẩn</h3>
          <p className="plan-price">$10/tháng</p>
          <ul className="plan-features">
            <li>Tất cả tính năng của Gói Cơ Bản</li>
            <li>Quản lý tài khoản người dùng</li>
            <li>Thông báo qua email/SMS</li>
            <li>Báo cáo điểm danh chi tiết</li>
          </ul>
          <button className="select-plan-btn" onClick={() => handleSelectPlan('Standard')}>
            Chọn Gói
          </button>
        </div>

        {/* Gói Cao Cấp */}
        <div className="service-plan">
          <h3 className="plan-title">Gói Cao Cấp</h3>
          <p className="plan-price">$30/tháng</p>
          <ul className="plan-features">
            <li>Tất cả tính năng của Gói Tiêu Chuẩn</li>
            <li>Quản lý điểm danh theo lớp học và nhóm</li>
            <li>Hệ thống báo cáo tùy chỉnh với biểu đồ</li>
            <li>Tích hợp API để đồng bộ với hệ thống khác</li>
          </ul>
          <button className="select-plan-btn" onClick={() => handleSelectPlan('Premium')}>
            Chọn Gói
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;
