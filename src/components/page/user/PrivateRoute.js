import { Navigate, Outlet } from "react-router-dom";

// Giả sử chúng ta có một hàm để kiểm tra người dùng đã đăng nhập hay chưa
const isLoggedIn = () => {
  // Thay thế bằng logic thực tế để kiểm tra người dùng
  return localStorage.getItem("userLoggedIn") === "true";
};
console.log(isLoggedIn());
function PrivateRoute() {
  if (!isLoggedIn()) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }
  // Nếu đã đăng nhập, cho phép truy cập vào các route con
  return (
    <>
      <h2>da bao ve</h2>
      <Outlet />
    </>
  );
}

export default PrivateRoute;
