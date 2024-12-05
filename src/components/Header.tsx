import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
// Định nghĩa danh sách các liên kết
const headerList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <nav id="header">
      <ul className="header_navbar-list">
        <li className="header_navbar-item">
          <img src="/logo.png" alt="logo_theBox" />
        </li>
        <li className="header_navbar-item text-italic text-bold">The</li>
        <div>Box</div>
      </ul>
      <ul className="header_navbar-list">
        {headerList.map((item, index) => (
          <li key={index}>
            <NavLink
             to={item.path}
             className={({isActive})=>{
              const activeClass = isActive?'active':''
              return activeClass
             }}
             >
              {item.label}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
