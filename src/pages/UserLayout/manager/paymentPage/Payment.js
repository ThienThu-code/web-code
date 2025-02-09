import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Nhận thông tin gói dịch vụ từ state
  const { plan } = location.state || {}; 
  
  // Trạng thái thanh toán và phương thức thanh toán
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  // Chuyển đổi phương thức thanh toán
  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  // Xử lý thanh toán qua ngân hàng (giả lập)
  const handleBankPayment = (e) => {
    e.preventDefault();
    setPaymentCompleted(true); // Giả lập thanh toán thành công
  };

  // Xử lý thanh toán qua MoMo (giả lập)
  const handleMomoPayment = () => {
    setPaymentCompleted(true); // Giả lập thanh toán thành công
  };

  // Quay lại trang chủ sau khi thanh toán thành công
  const handleRedirectHome = () => {
    alert('Thanh toán thành công!');
    navigate('/user/home');
  };

  // Xác định class cho phương thức thanh toán
  let momoButtonClass = 'method-btn';
  let bankButtonClass = 'method-btn';

  if (selectedMethod === 'momo') {
    momoButtonClass = 'method-btn selected';
  }
  if (selectedMethod === 'bank') {
    bankButtonClass = 'method-btn selected';
  }

  // Kiểm tra xem thanh toán đã thành công chưa
  if (paymentCompleted === true) {
    return (
      <div className="payment-success">
        <h3>Thanh toán thành công!</h3>
        <button onClick={handleRedirectHome}>Quay về trang chủ</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Thanh Toán Dịch Vụ</h2>
      <div className="payment-info">
        <h3>Gói Dịch Vụ: {plan}</h3>
        <p>Chọn phương thức thanh toán:</p>

        <div className="payment-methods">
          <button
            className={momoButtonClass}
            onClick={() => handleMethodChange('momo')}
          >
            Ví MoMo
          </button>
          <button
            className={bankButtonClass}
            onClick={() => handleMethodChange('bank')}
          >
            Ngân Hàng
          </button>
        </div>

        {/* Phương thức thanh toán MoMo */}
        {selectedMethod === 'momo' && (
          <div className="momo-payment">
            <h4>Thanh toán qua MoMo</h4>
            <p>Quét mã QR dưới đây để thanh toán:</p>
            <img src="https://via.placeholder.com/300x300?text=QR+Code+MoMo" alt="QR MoMo" />
            <button onClick={handleMomoPayment} className="pay-btn">Thanh toán MoMo</button>
          </div>
        )}

        {/* Phương thức thanh toán Ngân Hàng */}
        {selectedMethod === 'bank' && (
          <div className="bank-payment">
            <h4>Thanh toán qua Ngân Hàng</h4>
            <form onSubmit={handleBankPayment}>
              <div className="form-group">
                <label htmlFor="cardNumber">Số thẻ tín dụng</label>
                <input type="text" id="cardNumber" placeholder="Nhập số thẻ tín dụng" required />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Ngày hết hạn</label>
                <input type="text" id="expiryDate" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="Nhập mã CVV" required />
              </div>
              <button type="submit" className="pay-btn">Thanh toán qua Ngân Hàng</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
