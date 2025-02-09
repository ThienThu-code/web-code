import React, { useState, useEffect } from 'react'; // Import React và hooks
import './Register.css'; // Import file CSS
import axios from 'axios'; // Import thư viện axios để gửi HTTP requests
import { Link } from 'react-router-dom'; // Import Link để chuyển trang

// Import hình ảnh sử dụng trong carousel
import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';

// Component Register
const Register = () => {
  // Quản lý trạng thái form và tiến trình đăng ký
  const [step, setStep] = useState(1); // Bước hiện tại trong quy trình đăng ký
  const [formData, setFormData] = useState({
    fullName: '', // Họ tên
    email: '', // Email
    phone: '', // Số điện thoại
    password: '', // Mật khẩu
    otp: '' // Mã OTP
  });
  const [otpSent, setOtpSent] = useState(false); // Trạng thái gửi OTP
  const [otpVerified, setOtpVerified] = useState(false); // Trạng thái OTP đã được xác thực

  // Quản lý trạng thái carousel
  const [currentSlide, setCurrentSlide] = useState(0); // Slide hiện tại trong carousel
  const slides = [
    { id: 1, title: 'Welcome To App!', text: 'Chúng tôi rất vui mừng chào đón bạn đến với ứng dụng của chúng tôi, nơi giúp bạn số hóa quy trình điểm danh một cách hiệu quả và tiện lợi', img: image1 },
    { id: 2, title: 'Giải pháp số hóa quy trình', text: 'Ứng dụng của chúng tôi tối ưu hóa quy trình điểm danh, giảm thiểu sai sót và tiết kiệm thời gian cho các tổ chức giáo dục và doanh nghiệp', img: image2 },
    { id: 3, title: 'Tiện lợi và hiệu quả', text: 'Theo dõi lịch sử tham gia và quản lý danh sách điểm danh một cách dễ dàng với ứng dụng điểm danh', img: image3 },
    { id: 4, title: 'Thống kê dễ dàng', text: 'Xuất báo cáo thống kê nhanh chóng và chính xác, giúp người dùng nắm bắt thông tin tham gia một cách hiệu quả', img: image4 },
  ];

  // Hiệu ứng tự động chuyển đổi slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Chuyển sang slide kế tiếp
    }, 3000);

    return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, [slides.length]);

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Cập nhật giá trị trong formData
  };

  // Hàm gửi OTP
  const handleSendOtp = async () => {
    const { email, phone } = formData;
    if (email || phone) {
      try {
        const response = await axios.post('http://34.58.91.235:8000/api/test', { email, phone });
        if (response.data.success) {
          setOtpSent(true); // Đánh dấu OTP đã được gửi thành công
          alert(`Mã OTP đã được gửi đến ${email || phone}`);
        } else {
          alert('Không thể gửi mã OTP, vui lòng thử lại!');
        }
      } catch {
        alert('Lỗi trong quá trình gửi mã OTP!');
      }
    } else {
      alert('Vui lòng nhập email hoặc số điện thoại');
    }
  };

  // Hàm xác thực OTP
  const handleVerifyOtp = () => {
    if (formData.otp === '00000') { // Kiểm tra OTP (ví dụ: '00000')
      setOtpVerified(true); // Đánh dấu OTP đã được xác thực
      setStep(4); // Chuyển sang bước đăng ký thành công (popup)
    } else {
      alert('Mã OTP không chính xác, vui lòng thử lại!');
    }
  };

  // Hàm đăng ký tài khoản
  const handleRegister = async () => {
    const { fullName, email, phone, password } = formData;
    try {
      const response = await axios.post('http://34.58.91.235:8000/api/test', { fullName, email, phone, password });
      if (response.data.success) {
        alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
      } else {
        alert('Đăng ký không thành công, vui lòng thử lại!');
      }
    } catch {
      alert('Lỗi trong quá trình đăng ký!');
    }
  };

  // Hiển thị giao diện
  return (
    <div className="register-container">
      {/* Carousel nền */}
      <div className="register-background-carousel">
        <img src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
        <div className="slide-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>
        </div>
      </div>

      {/* Form đăng ký */}
      <div className="register-form-side">
        {/* Ẩn h2 và phần đăng ký nếu đang ở bước 2 (OTP) */}
        {step !== 2 && <h2>Đăng ký</h2>}
        {step !== 2 && (
          <p>Đã có tài khoản? <Link to="/">Đăng nhập</Link></p>
        )}

        {/* Bước 1: Nhập thông tin người dùng */}
        {step === 1 && (
          <div className="register-form">
            <label>Họ tên:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Nhập họ tên"
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
            />
            <label>Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
            />
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
            />
            <button onClick={() => setStep(2)}>Tiếp theo</button>
          </div>
        )}

        {/* Bước 2: Nhập mã OTP */}
        {step === 2 && (
          <div className='register-OTP-form'>
            <h2>Xác thực thông tin</h2>
            <p>Nhập mã OTP đã được gửi đến email hoặc số điện thoại của bạn</p>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              placeholder="Nhập mã OTP"
            />
            <button onClick={handleSendOtp}>Gửi mã OTP</button>
            {otpSent && <button onClick={handleVerifyOtp}>Xác thực OTP</button>}
            <button onClick={() => setStep(1)}>Quay lại</button>
          </div>
        )}

        {/* Bước 3: Đăng ký thành công */}
        {step === 3 && otpVerified && (
          <div className="register-popup">
            <h2>Đăng ký thành công!</h2>
            <p>Bạn đã hoàn tất quy trình đăng ký.</p>
            <button onClick={handleRegister}>Đăng ký</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
