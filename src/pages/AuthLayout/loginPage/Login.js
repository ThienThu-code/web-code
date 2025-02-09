import React, { useState, useEffect } from 'react'; 
import Webcam from 'react-webcam'; 
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import './Login.css'; 

import image1 from '../../../assets/images/image1.png'; 
import image2 from '../../../assets/images/image2.png'; 
import image3 from '../../../assets/images/image3.png'; 
import image4 from '../../../assets/images/image4.png'; 

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [loginMethod, setLoginMethod] = useState('email'); 
  const [faceRecognitionResult, setFaceRecognitionResult] = useState(null); 
  const [currentSlide, setCurrentSlide] = useState(0); 

  const navigate = useNavigate(); 

  // Tài khoản mẫu để kiểm thử
  const sampleAccounts = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'manager@example.com', password: 'manager123', role: 'manager' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
  ];

  const slides = [
    { id: 1, title: 'Welcome To App!', text: 'Chúng tôi rất vui mừng chào đón bạn đến với ứng dụng của chúng tôi.', img: image1 },
    { id: 2, title: 'Giải pháp số hóa quy trình', text: 'Ứng dụng của chúng tôi tối ưu hóa quy trình điểm danh.', img: image2 },
    { id: 3, title: 'Tiện lợi và hiệu quả', text: 'Theo dõi lịch sử tham gia và quản lý danh sách điểm danh.', img: image3 },
    { id: 4, title: 'Thống kê dễ dàng', text: 'Xuất báo cáo thống kê nhanh chóng và chính xác.', img: image4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); 
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Xử lý đăng nhập
  const handleLoginWithEmail = async () => {
    const account = sampleAccounts.find(acc => acc.email === email && acc.password === password); // Tìm tài khoản hợp lệ
    if (account) {
      alert('Login successful!'); // Hiển thị thông báo đăng nhập thành công
  
      // Lưu role vào localStorage
      localStorage.setItem('role', account.role);
  
      navigate(`/${account.role}/home`); // Điều hướng tới trang dashboard của role tương ứng
    } else {
      alert('Invalid credentials. Please try again!');
    }
  };  

  const handleFaceRecognition = async () => {
    if (!faceRecognitionResult) {
      alert('Please capture your face first.');
      return;
    }

    try {
      const response = await axios.post('http://example.com/api/face-login', { image: faceRecognitionResult });
      if (response.data.success) {
        navigate('/dashboard'); 
      } else {
        alert('Face recognition failed. Please try again.');
      }
    } catch (error) {
      alert('Error during face recognition.');
    }
  };

  const handleCapture = (image) => {
    setFaceRecognitionResult(image);
  };

  return (
    <div className="login-container">
      <div className="login-background-carousel">
        <img src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
        <div className="slide-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].text}</p>
        </div>
      </div>

      <div className="login-form">
        <h2>Login</h2>

        <div className='login-choose'>
          <label>
            Choose login method:
            <select onChange={(e) => setLoginMethod(e.target.value)} value={loginMethod}>
              <option value="email">Email/Phone</option>
              <option value="face">Face Recognition</option>
            </select>
          </label>
        </div>

        {loginMethod === 'email' && (
          <div className="login-form-email">
            <label>
              Email/Phone:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
            <button onClick={handleLoginWithEmail}>Login</button>
            <div className='login-link'>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        )}

        {loginMethod === 'face' && (
          <div className="face-recognition">
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={{ facingMode: 'user' }}
              onScreenshot={handleCapture}
            />
            <button onClick={handleFaceRecognition}>Recognize Face</button>
          </div>
        )}

        <div className='login-link'>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
