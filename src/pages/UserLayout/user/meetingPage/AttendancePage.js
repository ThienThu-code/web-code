import React, { useState } from "react";
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./Attendance.css";

const Attendance = () => {
  const [step, setStep] = useState(1); // Bắt đầu trực tiếp từ bước 1
  const [code, setCode] = useState("");
  const [photo, setPhoto] = useState(null); // To store the captured photo
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleCapture = (screenshot) => {
    // Save the captured photo in state
    setPhoto(screenshot);
  };

  const handleFaceRecognition = async () => {
    try {
      alert("Đang nhận diện khuôn mặt...");
      // Gửi ảnh lên server qua API
      await sendFaceData(photo);
      alert("Nhận diện khuôn mặt thành công!");
      // Hiển thị thông báo điểm danh thành công rồi chuyển đến trang lịch sử
      setTimeout(() => {
        navigate("/user/History"); // Điều hướng đến trang lịch sử đăng nhập
      }, 1000); // Đợi 1 giây trước khi chuyển hướng
    } catch (error) {
      alert("Lỗi trong quá trình nhận diện khuôn mặt. Vui lòng thử lại!");
    }
  };

  const sendFaceData = async (photoData) => {
    try {
      // Gửi dữ liệu khuôn mặt (ảnh) lên API
      const formData = new FormData();
      formData.append("faceImage", photoData, "face.jpg"); // Đảm bảo tên file là "face.jpg"

      const response = await fetch("http://34.58.91.235:8000/api/test", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Không thể gửi dữ liệu đến server.");
      }

      const data = await response.json();
      console.log("API Response:", data);
      return data;
    } catch (error) {
      console.error("Error while sending face data:", error);
      throw new Error("Lỗi khi gửi dữ liệu khuôn mặt.");
    }
  };

  const handleBackToSelection = () => {
    setStep(1); // Quay lại bước chọn phương thức điểm danh
  };

  const handleCancel = () => {
    navigate("/user/home"); // Chuyển về trang home
  };

  return (
    <div className="attendance-container">
      {step === 1 && (
        <div className="modal">
          <p>Chọn phương thức điểm danh</p>
          <button className="btn" onClick={() => setStep(2)}>📷 Face</button>
          <button className="btn" onClick={() => setStep(3)}>🔢 Code</button>
          <button className="btn" onClick={handleCancel}>Hủy điểm danh</button> {/* Nút hủy đăng ký */}
        </div>
      )}
      {step === 2 && (
        <div className="modal">
          <p>Đang quét khuôn mặt...</p>
          <div className="face-recognition">
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={{ facingMode: 'user' }}
              onScreenshot={handleCapture}
            />
            <button className="btn" onClick={handleFaceRecognition}>Nhận diện khuôn mặt</button>
            <button className="btn" onClick={handleBackToSelection}>Quay lại</button>
          </div>
          {photo && <img src={photo} alt="Captured Face" />}
        </div>
      )}
      {step === 3 && (
        <div className="modal">
          <p>Nhập code</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Nhập mã..."
          />
          <button className="btn" onClick={() => {
            alert("Điểm danh thành công!");
            setTimeout(() => {
              navigate("/user/History"); // Chuyển đến trang lịch sử đăng nhập
            }, 2000); // Đợi 2 giây trước khi chuyển hướng
          }}>Điểm danh</button>
          <button className="btn" onClick={handleBackToSelection}>Quay lại</button>
        </div>
      )}
    </div>
  );
};

export default Attendance;
