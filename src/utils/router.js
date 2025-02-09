// Định nghĩa đối tượng ROUTERS chứa các đường dẫn (routes) cho ứng dụng
export const ROUTERS = {
    AUTH: {
        LOGIN: "/", // Trang đăng nhập
        FORGOTPASSWORD: "/forgot-password", // Trang quên mật khẩu
        REGISTER: "/register", // Trang đăng ký
    },
    USER: {
        HOME_ADMIN: "/admin/home", // Trang chủ Admin
        HOME_MANAGER: "/manager/home", // Trang chủ Manager
        HOME_USER: "/user/home", // Trang chủ User

        PROFILE_ADMIN: "/admin/profile", // Trang Profile Admin
        PROFILE_MANAGER: "/manager/profile", // Trang Profile Manager
        PROFILE_USER: "/user/profile", // Trang Profile User

        //user
        HISTORY_USER: "/user/history",
        SERVICE_USER: "/user/service",
        PAYMENT_USER: "/user/payment",
        LOCATION_USER: "/user/location",
        CHANGEPASS_USER: "/user/changepassword",
        MEETINGROOM_USER: "/user/meetinglist",
        REQUEST_USER: "/user/request",
        
        //manager
        HISTORY_MANAGER: "/manager/history",
        SERVICE_MANAGER: "/manager/service",
        PAYMENT_MANAGER: "/manager/payment",
        LOCATION_MANAGER: "/manager/location",
        CHANGEPASS_MANAGER: "/manager/changepassword",
        MEETINGROOM_MANAGER: "/manager/meetinglist",
        REPORT_MANAGER: "/manager/reports",
        REQUEST_MANAGER: "/manager/request",

        //admin
        HISTORY_ADMIN: "/admin/history",
        SERVICE_ADMIN: "/admin/service",
        PAYMENT_ADMIN: "/admin/payment",
        LOCATION_ADMIN: "/admin/location",
        CHANGEPASS_ADMIN: "/admin/changepassword",
        MEETINGROOM_ADMIN: "/admin/meetinglist",
        MANAGERUSER_ADMIN: "/admin/manage",
        SETTING_ADMIN: "/admin/setting",
        REQUEST_ADMIN: "/admin/request",
    }
};