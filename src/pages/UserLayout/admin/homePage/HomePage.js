import React, { useState } from "react";
import WeeklyCalendar from "./WeeklyCalendar";
import MeetingSchedule from "./MeetingSchedule";
import "./HomePage.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const meetings = [
    {
      title: "Họp đội phát triển dữ liệu",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Văn A",
    },
    {
      title: "Họp khách hàng",
      date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Văn B",
    },
    {
      title: "Họp đội phát triển phần mềm",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Thị C",
    },
    {
      title: "Báo cáo khảo sát",
      date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Thị D",
    },
    {
      title: "Họp hội đồng quản trị",
      date: new Date().toISOString(),
      time: "10:00 - 11:00",
      location: "Phòng họp 1",
      manager: "Nguyễn Thị C",
    },
    {
      title: "Họp khách hàng tiềm năng",
      date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
      time: "14:00 - 15:00",
      location: "Phòng họp 2",
      manager: "Nguyễn Văn A",
    },
  ];

  return (
    <div className="home">
      <h1>Lịch Trình Theo Tuần</h1>
      <WeeklyCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <MeetingSchedule selectedDate={selectedDate} meetings={meetings} />
    </div>
  );
};

export default Home;
