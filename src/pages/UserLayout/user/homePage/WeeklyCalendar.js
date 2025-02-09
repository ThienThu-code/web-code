import React from "react";
import "./WeeklyCalendar.css";

const WeeklyCalendar = ({ selectedDate, setSelectedDate }) => {
  // Mảng các ngày trong tuần
  const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  
  // Tạo một đối tượng Date từ ngày được chọn (selectedDate)
  const currentDate = new Date(selectedDate);
  
  // Tính ngày đầu tuần (Chủ Nhật) trong tuần hiện tại
  const startOfWeek = currentDate.getDate() - currentDate.getDay(); 

  // Tạo mảng chứa các ngày trong tuần (7 ngày)
  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(currentDate);
    date.setDate(startOfWeek + index); // Cập nhật ngày trong tuần
    return date;
  });

  // Hàm chuyển tuần: Chuyển đến tuần trước hoặc tuần sau
  const changeWeek = (direction) => {
    const newStartOfWeek = new Date(selectedDate);
    newStartOfWeek.setDate(selectedDate.getDate() + direction * 7); // Cộng hoặc trừ 7 ngày
    setSelectedDate(newStartOfWeek); // Cập nhật selectedDate
  };

  // Lấy tên tháng hiện tại
  const monthName = currentDate.toLocaleString('default', { month: 'long' }); // Tên tháng
  const year = currentDate.getFullYear(); // Năm hiện tại

  return (
    <div className="weekly-calendar">
      {/* Hiển thị tháng và năm hiện tại */}
      <div className="current-month">
        <h3>{monthName} {year}</h3>
      </div>
      
      {/* Các nút chuyển tuần */}
      <div className="nav-buttons">
        <button onClick={() => changeWeek(-1)}>Tuần Trước</button>
        <button onClick={() => changeWeek(1)}>Tuần Sau</button>
      </div>

      {/* Hiển thị tuần hiện tại */}
      <div className="week">
        {week.map((date, index) => {
          // Kiểm tra xem ngày này có phải là ngày được chọn hay không
          let dayClass = "day";
          if (selectedDate.toDateString() === date.toDateString()) {
            dayClass += " selected"; // Thêm 'selected' nếu là ngày được chọn
          }

          return (
            <div
              key={index}
              className={dayClass} // Sử dụng biến dayClass để xác định lớp
              onClick={() => setSelectedDate(date)} // Khi nhấn vào ngày, cập nhật selectedDate
            >
              <span>{daysOfWeek[index]}</span>
              <span>{date.getDate()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
