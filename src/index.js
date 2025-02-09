// Nhập React từ thư viện 'react' để sử dụng các tính năng của React như JSX
import React from 'react';

// Nhập ReactDOM từ thư viện 'react-dom/client' để sử dụng các phương thức của ReactDOM như render
import ReactDOM from 'react-dom/client';

// Nhập BrowserRouter từ 'react-router-dom' để sử dụng cho việc điều hướng (routing) trong ứng dụng
import { BrowserRouter } from 'react-router-dom';

// Nhập RouterCustom, đây là component định nghĩa các route trong ứng dụng
import RouterCustom from './router';


// Tạo root DOM nơi React sẽ render ứng dụng, lấy phần tử có id 'root' trong HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Sử dụng phương thức render để gắn ứng dụng vào DOM, sử dụng BrowserRouter để quản lý các route
root.render(
    <BrowserRouter> {/* Bao bọc ứng dụng trong BrowserRouter để xử lý routing */}
        <RouterCustom/> {/* Gọi RouterCustom để hiển thị các route của ứng dụng */}
    </BrowserRouter>
);
