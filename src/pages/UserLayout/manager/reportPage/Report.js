import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import jsPDF autotable
import * as XLSX from "xlsx";
import "./Report.css"; // Import file CSS

const ReportPage = () => {
  const data = [
    ["Name", "Age", "Email"],
    ["John Doe", 28, "john@example.com"],
    ["Jane Doe", 34, "jane@example.com"],
    ["Mike Ross", 40, "mike@example.com"]
  ];

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Báo Cáo", 20, 20);
    doc.autoTable({ html: "#reportTable" }); // Tạo bảng PDF
    doc.save("report.pdf");
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Báo Cáo");
    XLSX.writeFile(wb, "report.xlsx");
  };

  return (
    <div className="report-container">
      <h1>Trang Báo Cáo</h1>
      
      <table id="reportTable" className="report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={exportToPDF}>Xuất PDF</button>
        <button onClick={exportToExcel}>Xuất Excel</button>
      </div>
    </div>
  );
};

export default ReportPage;
