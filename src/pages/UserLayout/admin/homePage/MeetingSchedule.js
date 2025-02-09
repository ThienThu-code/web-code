import React from "react";
import { useNavigate } from "react-router-dom";
import "./MeetingSchedule.css";

// Import các hình ảnh
import room1 from '../../../../assets/images/room1.png';
import room2 from '../../../../assets/images/room2.png';

function MeetingSchedule({ selectedDate, meetings }) {
  const navigate = useNavigate();

  // Mảng các hình ảnh phòng
  const roomImages = [room1, room2]; // Danh sách hình ảnh phòng

  // Hàm để chọn ngẫu nhiên hình ảnh
  const getRandomRoomImage = () => {
    const randomIndex = Math.floor(Math.random() * roomImages.length);
    return roomImages[randomIndex]; // Chọn ngẫu nhiên một hình ảnh trong mảng
  };

  // Lọc các cuộc họp theo ngày được chọn
  const filteredMeetings = meetings.filter(
    (meeting) =>
      new Date(meeting.date).toDateString() === selectedDate.toDateString()
  );

  // Hàm để hiển thị nội dung cuộc họp
  const renderMeetings = () => {
    if (filteredMeetings.length > 0) {
      return filteredMeetings.map((meeting, index) => (
        <div
          key={index}
          className="meeting-card"
          onClick={() => navigate(`/user/meetinglist`)} // Chuyển hướng đến trang điểm danh
        >
          <div className="meeting-image">
            {/* Sử dụng hàm getRandomRoomImage để chọn hình ảnh ngẫu nhiên */}
            <img
              src={getRandomRoomImage()}  // Chọn hình ảnh ngẫu nhiên
              alt="Meeting"
              className="image"
            />
            <div className="favorite-icon">❤️</div>
          </div>
          <div className="meeting-details">
            <h3 className="meeting-title">{meeting.title}</h3>
            <p>
              📅 {new Date(meeting.date).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>⏰ {meeting.time}</p>
            <p>📍 {meeting.location}</p>
            <p>👤 {meeting.manager}</p>
          </div>
        </div>
      ));
    } else {
      return <p>Không có cuộc họp nào trong ngày này.</p>;
    }
  };

  return <div className="meeting-schedule">{renderMeetings()}</div>;
}

export default MeetingSchedule;
