import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

// Import hình ảnh sử dụng trong carousel
import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';

// Component ForgotPassword
const ForgotPassword = () => {
  // 1. Quản lý trạng thái form và carousel
  const [email, setEmail] = useState(''); // Email người dùng nhập
  const [phone, setPhone] = useState(''); // Số điện thoại người dùng nhập
  const [inputType, setInputType] = useState('email'); // Loại thông tin đăng nhập (email hoặc số điện thoại)
  const [message, setMessage] = useState(''); // Thông báo hiển thị cho người dùng
  const [isSent, setIsSent] = useState(false); // Trạng thái gửi liên kết đặt lại mật khẩu
  const [currentSlide, setCurrentSlide] = useState(0); // Trạng thái slide hiện tại trong carousel
  
  // Dữ liệu của các slide trong carousel
  const slides = [
    { id: 1, title: 'Welcome To App!', text: 'Chúng tôi rất vui mừng chào đón bạn đến với ứng dụng của chúng tôi, nơi giúp bạn số hóa quy trình điểm danh một cách hiệu quả và tiện lợi', img: image1 },
    { id: 2, title: 'Giải pháp số hóa quy trình', text: 'Ứng dụng của chúng tôi tối ưu hóa quy trình điểm danh, giảm thiểu sai sót và tiết kiệm thời gian cho các tổ chức giáo dục và doanh nghiệp', img: image2 },
    { id: 3, title: 'Tiện lợi và hiệu quả', text: 'Theo dõi lịch sử tham gia và quản lý danh sách điểm danh một cách dễ dàng với ứng dụng điểm danh', img: image3 },
    { id: 4, title: 'Thống kê dễ dàng', text: 'Xuất báo cáo thống kê nhanh chóng và chính xác, giúp người dùng nắm bắt thông tin tham gia một cách hiệu quả', img: image4 },
  ];

  // 2. Tự động chuyển slide mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng slide hiện tại, quay lại slide đầu tiên khi hết
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  // 3. Xử lý thay đổi input (email hoặc phone)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value); // Cập nhật email
    if (name === 'phone') setPhone(value); // Cập nhật số điện thoại
  };

  // 4. Gửi yêu cầu gửi liên kết đặt lại mật khẩu
  const handleSendResetLink = async () => {
    const hasEmail = inputType === 'email' && email; // Kiểm tra có email
    const hasPhone = inputType === 'phone' && phone; // Kiểm tra có số điện thoại

    if (hasEmail || hasPhone) {
      try {
        // Gửi yêu cầu đến API
        const response = await axios.post('http://34.58.91.235:8000/api/test', { email, phone });

        // Xử lý kết quả phản hồi
        if (response.data.success) {
          setIsSent(true); // Đánh dấu gửi thành công
          setMessage(`Một liên kết đặt lại mật khẩu đã được gửi đến ${email || phone}`);
        } else {
          setMessage('Không thể gửi liên kết, vui lòng thử lại!');
        }
      } catch {
        // Xử lý lỗi mạng hoặc server
        setMessage('Lỗi trong quá trình gửi liên kết!');
      }
    } else {
      // Hiển thị thông báo nếu không nhập email hoặc số điện thoại
      setMessage('Vui lòng nhập email hoặc số điện thoại');
    }
  };

  // 5. Hiển thị nội dung form hoặc thông báo
  const renderFormContent = () => {
    if (isSent) {
      // Nếu đã gửi thành công, hiển thị thông báo
      return <div className="message">{message}</div>;
    }

    const isEmailInput = inputType === 'email'; // Kiểm tra loại input hiện tại

    return (
      <div className="forgot-password-form">
        <label>Chọn thông tin đăng nhập:</label>
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="email">Email</option>
          <option value="phone">Số điện thoại</option>
        </select>

        {/* Hiển thị input tương ứng với loại thông tin */}
        {isEmailInput && (
          <input
            type="email"
            name="email"
            placeholder="Nhập Email của bạn"
            value={email}
            onChange={handleInputChange}
          />
        )}
        {!isEmailInput && (
          <input
            type="text"
            name="phone"
            placeholder="Nhập số điện thoại của bạn"
            value={phone}
            onChange={handleInputChange}
          />
        )}

        <button onClick={handleSendResetLink}>Gửi liên kết đặt lại mật khẩu</button>
      </div>
    );
  };

  // 6. JSX render giao diện
  return (
    <div className="forgot-container">
      {/* Phần nền carousel */}
      <div className="forgot-background-carousel">
        <img src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
        <div className="slide-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>
        </div>
      </div>

      {/* Phần form chính */}
      <div className="forgot-form">
        <h2>Quên mật khẩu</h2>
        {renderFormContent()} {/* Hiển thị form hoặc thông báo */}
        <p>
          <a href="/">Quay lại đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
