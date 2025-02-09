import React from "react";
import AttendanceHistory from "./AttendanceHistory";
import "./History.css"

const History = () => {
  const attendanceRecords = [
    {
      subject: "Họp đội phát triển dữ liệu",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Văn A",
      status: "Đã điểm danh",
      //image: "https://via.placeholder.com/150",
    },
    {
      subject: "Họp khách hàng",
      date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Văn B",
      status: "Chưa điểm danh",
      //image: "https://via.placeholder.com/150",
    },
    {
      subject: "Họp đội phát triển phần mềm",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Thị C",
      status: "Đã điểm danh",
      //image: "https://via.placeholder.com/150",
    },
    {
      subject: "Báo cáo khảo sát",
      date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Thị D",
      status: "Chưa điểm danh",
      //image: "https://via.placeholder.com/150",
    },
    {
      subject: "Họp hội đồng quản trị",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Thị C",
      status: "Đã điểm danh",
      //image: "https://via.placeholder.com/150",
    },
    {
      subject: "Họp khách hàng tiềm năng",
      date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Văn A",
      status: "Chưa điểm danh",
      //image: "https://via.placeholder.com/150",
    },
  ];
  

  return (
    <div className="history">
      <h1>Lịch Sử Điểm Danh</h1>
      <AttendanceHistory attendanceRecords={attendanceRecords} />
    </div>
  );
};

export default History;
