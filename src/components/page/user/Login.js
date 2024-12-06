import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Đăng nhập thành công
    navigate("/admin/profile"); // Chuyển hướng đến trang quản lý người dùng sau khi đăng nhập
  };

  return (
    <div>
      <h2>Đăng Nhập</h2>
      <button onClick={handleLogin}>Đăng Nhập</button>
    </div>
  );
}

export default Login;
