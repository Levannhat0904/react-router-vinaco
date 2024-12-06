import { createContext, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function User() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Thong tin ca nhan</h1>
      <div style={{justifyContent:"center", display:"flex"}}>
        <button>
        <Link to="/admin/profile">Thông tin cá nhân</Link>
        </button>
        <button>
        <Link to="/admin/change-password">Thay đổi mật khẩu</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
}
export default User;
