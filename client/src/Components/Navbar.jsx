import logo from "../assets/logo.png";

import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo cursor-pointer">
            <img src={logo} alt="FloraVision Logo" />
            <h1>FloraVision.</h1>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Plants Type</li>
            <li>More</li>
            <li>Contact</li>
          </ul>
          <div className="nav-icons">
            <FiSearch />
            <FiShoppingBag />
            <FiUser />
            <FiMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}