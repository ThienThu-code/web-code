import React from "react";
import "./AttendanceHistory.css";

const AttendanceHistory = ({ attendanceRecords }) => {
  return (
    <div className="attendance-history">
      {attendanceRecords.map((record, index) => {
        // Xác định class trạng thái và icon trạng thái
        const statusClass = (() => {
          if (record.status === "Đã điểm danh") {
            return "checked"; // Đã điểm danh
          } else {
            return "not-checked"; // Chưa điểm danh
          }
        })();

        const statusIcon = (() => {
          if (record.status === "Đã điểm danh") {
            return "✔️"; // Icon trạng thái đã điểm danh
          } else {
            return "❌"; // Icon trạng thái chưa điểm danh
          }
        })();

        return (
          <div key={index} className="attendance-card">
            <div className="attendance-image">
              {/*<img src={record.image} alt={record.subject} className="image" />*/}
              <div className={`status-icon ${statusClass}`}>{statusIcon}</div>
            </div>
            <div className="attendance-details">
              <h3 className="attendance-title">{record.subject}</h3>
              <p>
                📅 {new Date(record.date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>⏰ {record.time}</p>
              <p>📍 {record.location}</p>
              <p>👤 {record.manager}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceHistory;
