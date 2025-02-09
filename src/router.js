// Nhập các component cần thiết từ thư viện 'react-router-dom' để quản lý các đường dẫn trong ứng dụng
import { Route, Routes } from "react-router-dom";

// Nhập các trang (components) tương ứng với từng đường dẫn
import LoginPage from "./pages/AuthLayout/loginPage/Login"; // Trang đăng nhập
import RegisterPage from "./pages/AuthLayout/registerPage/Register"; // Trang đăng ký
import ForgotPasswordPage from "./pages/AuthLayout/forgotPassPage/ForgotPassword"; // Trang quên mật khẩu

// Nhập các trang chính cho từng vai trò
import AdminHomePage from "./pages/UserLayout/admin/homePage/HomePage"; // Trang chủ Admin
import ManagerHomePage from "./pages/UserLayout/manager/homePage/HomePage"; // Trang chủ Manager
import UserHomePage from "./pages/UserLayout/user/homePage/HomePage"; // Trang chủ User

import AdminProfilePage from "./pages/UserLayout/admin/profilePage/ProfilePage";
import ManagerProfilePage from "./pages/UserLayout/manager/profilePage/Profile";
import UserProfilePage from "./pages/UserLayout/user/profilePage/ProfilePage";

//User
import UserHistoryAttendance from "./pages/UserLayout/user/historyPage/History";
import UserService from "./pages/UserLayout/user/paymentPage/ServicePlans";
import UserPayment from "./pages/UserLayout/user/paymentPage/Payment";
import UserLocation from "./pages/UserLayout/user/locationPage/Location";
import UserChangePassword from "./pages/UserLayout/user/changepassPage/ChangePage";
import UserMeetingRoom from "./pages/UserLayout/user/meetingPage/AttendancePage";
import UserRequest from "./pages/UserLayout/user/absentPage/LeaveRequestForm";


//Manager
import ManagerHistoryAttendance from "./pages/UserLayout/manager/historyPage/History";
import ManagerService from "./pages/UserLayout/manager/paymentPage/ServicePlans";
import ManagerPayment from "./pages/UserLayout/manager/paymentPage/Payment";
import ManagerLocation from "./pages/UserLayout/manager/locationPage/Location";
import ManagerChangePassword from "./pages/UserLayout/manager/changepassPage/ChangePage";
import ManagerMeetingRoom from "./pages/UserLayout/manager/meetingPage/AttendancePage";
import ManagerReport from "./pages/UserLayout/manager/reportPage/Report";
import ManagerRequest from "./pages/UserLayout/manager/absentPage/LeaveRequestForm";


//Admin
import AdminHistoryAttendance from "./pages/UserLayout/admin/historyPage/History";
import AdminService from "./pages/UserLayout/admin/paymentPage/ServicePlans";
import AdminPayment from "./pages/UserLayout/admin/paymentPage/Payment";
import AdminLocation from "./pages/UserLayout/admin/locationPage/Location";
import AdminChangePassword from "./pages/UserLayout/admin/changepassPage/ChangePage";
import AdminMeetingRoom from "./pages/UserLayout/admin/meetingPage/AttendancePage";
import AdminManageUser from "./pages/UserLayout/admin/usersPage/UserManagement";
import AdminRequest from "./pages/UserLayout/admin/absentPage/LeaveRequestForm";


// Nhập layout
import AuthLayout from "./layouts/authLayout/AuthLayout"; // Layout cho các trang không yêu cầu đăng nhập
import UserLayout from "./layouts/userLayout/UserLayout"; // Layout cho các trang yêu cầu đăng nhập

// Nhập đối tượng ROUTERS chứa các đường dẫn
import { ROUTERS } from "./utils/router";

// Hàm renderRoutes trả về các route cho ứng dụng
const renderRoutes = () => {
    // Mảng các route Auth (không yêu cầu đăng nhập)
    const authRoutes = [
        {
            path: ROUTERS.AUTH.LOGIN, // Đường dẫn đến trang đăng nhập
            component: <LoginPage /> // Component tương ứng với trang đăng nhập
        },
        {
            path: ROUTERS.AUTH.FORGOTPASSWORD, // Đường dẫn đến trang quên mật khẩu
            component: <ForgotPasswordPage /> // Component tương ứng với trang quên mật khẩu
        },
        {
            path: ROUTERS.AUTH.REGISTER, // Đường dẫn đến trang đăng ký
            component: <RegisterPage /> // Component tương ứng với trang đăng ký
        }
    ];

    // Mảng các route User (yêu cầu đăng nhập)
    const userRoutes = [
        {
            path: ROUTERS.USER.HOME_ADMIN, // Đường dẫn trang chủ Admin
            component: <AdminHomePage /> // Component tương ứng với trang chủ Admin
        },
        {
            path: ROUTERS.USER.HOME_MANAGER, // Đường dẫn trang chủ Manager
            component: <ManagerHomePage /> // Component tương ứng với trang chủ Manager
        },
        {
            path: ROUTERS.USER.HOME_USER, // Đường dẫn trang chủ User
            component: <UserHomePage /> // Component tương ứng với trang chủ User
        },

        {
            path: ROUTERS.USER.PROFILE_ADMIN, // Đường dẫn trang chủ Admin
            component: <AdminProfilePage /> // Component tương ứng với trang chủ Admin
        },
        {
            path: ROUTERS.USER.PROFILE_MANAGER, // Đường dẫn trang chủ Manager
            component: <ManagerProfilePage /> // Component tương ứng với trang chủ Manager
        },
        {
            path: ROUTERS.USER.PROFILE_USER, // Đường dẫn trang chủ User
            component: <UserProfilePage /> // Component tương ứng với trang chủ User
        },

        //user
        {
            path: ROUTERS.USER.HISTORY_USER, // Đường dẫn trang chủ User
            component: <UserHistoryAttendance /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.SERVICE_USER, // Đường dẫn trang chủ User
            component: <UserService /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.PAYMENT_USER, // Đường dẫn trang chủ User
            component: <UserPayment/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.LOCATION_USER, // Đường dẫn trang chủ User
            component: <UserLocation/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.CHANGEPASS_USER, // Đường dẫn trang chủ User
            component: <UserChangePassword/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.MEETINGROOM_USER, // Đường dẫn trang chủ User
            component: <UserMeetingRoom/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.REQUEST_USER, // Đường dẫn trang chủ User
            component: <UserRequest/> // Component tương ứng với trang chủ User
        },

        //manager
        {
            path: ROUTERS.USER.HISTORY_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerHistoryAttendance /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.SERVICE_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerService /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.PAYMENT_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerPayment/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.LOCATION_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerLocation/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.CHANGEPASS_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerChangePassword/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.MEETINGROOM_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerMeetingRoom/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.REPORT_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerReport/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.REQUEST_MANAGER, // Đường dẫn trang chủ User
            component: <ManagerRequest/> // Component tương ứng với trang chủ User
        },

        //admin
        {
            path: ROUTERS.USER.HISTORY_ADMIN, // Đường dẫn trang chủ User
            component: <AdminHistoryAttendance /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.SERVICE_ADMIN, // Đường dẫn trang chủ User
            component: <AdminService /> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.PAYMENT_ADMIN, // Đường dẫn trang chủ User
            component: <AdminPayment/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.LOCATION_ADMIN, // Đường dẫn trang chủ User
            component: <AdminLocation/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.CHANGEPASS_ADMIN, // Đường dẫn trang chủ User
            component: <AdminChangePassword/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.MEETINGROOM_ADMIN, // Đường dẫn trang chủ User
            component: <AdminMeetingRoom/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.MANAGERUSER_ADMIN, // Đường dẫn trang chủ User
            component: <AdminManageUser/> // Component tương ứng với trang chủ User
        },
        {
            path: ROUTERS.USER.REQUEST_ADMIN, // Đường dẫn trang chủ User
            component: <AdminRequest/> // Component tương ứng với trang chủ User
        },

    ];

    // Trả về cấu trúc các route được bọc trong layout
    return (
        <Routes>
            {/* Các route Auth */}
            {authRoutes.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    element={
                        <AuthLayout>
                            {item.component}
                        </AuthLayout>
                    }
                />
            ))}

            {/* Các route User */}
            {userRoutes.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    element={
                        <UserLayout>
                            {item.component}
                        </UserLayout>
                    }
                />
            ))}
        </Routes>
    );
};

// Component chính cho routing
const RouterCustom = () => {
    return renderRoutes(); // Gọi hàm renderRoutes để lấy danh sách các route
};

// Xuất component RouterCustom để sử dụng
export default RouterCustom;
