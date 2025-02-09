import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  // Thông tin người dùng (mock data)
  const [userInfo, setUserInfo] = useState({
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  });

  // Trạng thái chỉnh sửa
  const [editMode, setEditMode] = useState(false);

  // Hàm xử lý thay đổi thông tin
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm lưu thông tin
  const handleSave = () => {
    setEditMode(false);
    // Gửi dữ liệu đến API nếu cần
    console.log("Thông tin đã lưu:", userInfo);
  };

  return (
    <div className="profile-container">
      <h1>Thông tin cá nhân</h1>
      <div className="profile-row">
        <label>Họ và tên:</label>
        {editMode ? (
          <input
            type="text"
            name="fullName"
            value={userInfo.fullName}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.fullName}</span>
        )}
      </div>
      <div className="profile-row">
        <label>Email:</label>
        {editMode ? (
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.email}</span>
        )}
      </div>
      <div className="profile-row">
        <label>Số điện thoại:</label>
        {editMode ? (
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.phone}</span>
        )}
      </div>
      <div className="profile-row">
        <label>Địa chỉ:</label>
        {editMode ? (
          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.address}</span>
        )}
      </div>
      <div className="profile-buttons">
        {editMode ? (
          <button className="save-button" onClick={handleSave}>
            Lưu
          </button>
        ) : (
          <button className="edit-button" onClick={() => setEditMode(true)}>
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
