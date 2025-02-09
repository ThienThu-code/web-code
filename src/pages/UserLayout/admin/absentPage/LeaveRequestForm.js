import React, { useState } from 'react';
import './LeaveRequestForm.css';

const LeaveRequest = () => {
  const [requestName, setRequestName] = useState('');
  const [requestStartDate, setRequestStartDate] = useState('');
  const [requestEndDate, setRequestEndDate] = useState('');
  const [requestReason, setRequestReason] = useState('');

  const handleRequestNameChange = (e) => {
    setRequestName(e.target.value);
  };

  const handleRequestStartDateChange = (e) => {
    setRequestStartDate(e.target.value);
  };

  const handleRequestEndDateChange = (e) => {
    setRequestEndDate(e.target.value);
  };

  const handleRequestReasonChange = (e) => {
    setRequestReason(e.target.value);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    alert('Yêu cầu nghỉ phép đã được gửi!');
    // Giả sử gửi yêu cầu nghỉ phép lên server hoặc lưu trữ trong cơ sở dữ liệu
  };

  return (
    <div className="request-leave-container">
      <h1> Đơn xin nghỉ phép</h1>
      <form onSubmit={handleRequestSubmit} className="request-leave-form">
        <div className="request-form-group">
          <label htmlFor="requestName">Tên</label>
          <input
            type="text"
            id="requestName"
            value={requestName}
            onChange={handleRequestNameChange}
            required
          />
        </div>
        
        <div className="request-form-group">
          <label htmlFor="requestStartDate">Ngày bắt đầu</label>
          <input
            type="date"
            id="requestStartDate"
            value={requestStartDate}
            onChange={handleRequestStartDateChange}
            required
          />
        </div>
        
        <div className="request-form-group">
          <label htmlFor="requestEndDate">Ngày kết thúc</label>
          <input
            type="date"
            id="requestEndDate"
            value={requestEndDate}
            onChange={handleRequestEndDateChange}
            required
          />
        </div>
        
        <div className="request-form-group">
          <label htmlFor="requestReason">Lý do nghỉ phép</label>
          <textarea
            id="requestReason"
            value={requestReason}
            onChange={handleRequestReasonChange}
            required
          />
        </div>        
        <button type="submit" className="request-submit-btn">Gửi yêu cầu</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
