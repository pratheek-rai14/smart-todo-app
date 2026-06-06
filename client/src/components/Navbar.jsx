import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

import { FaMoon, FaSun } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import "../styles/Navbar.css";


const Navbar = () => {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const { user, setUser } =
    useContext(AuthContext);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

  return () => {
    document.removeEventListener(
    "mousedown",
    handleClickOutside
    );
  };
});

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("userInfo");

    setUser(null);

    navigate("/login");

  //Dropdown

  };

  return (
    <div className="navbar">

      {/* Logo */}
      <h2 className="logo">
        Smart Todo App
      </h2>

      {/* Right Side */}
      <div className="nav-actions">
        {/* Theme Toggle */}
  <button
    className="theme-btn"
    onClick={toggleTheme}
  >
    {darkMode ? <FaSun /> : <FaMoon />}
    {darkMode ? " Light" : " Dark"}
  </button>

  {/* User Avatar */}

  <div className="profile-container"
  ref={dropdownRef}
  >
  <div
    className="user-avatar"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    {user?.name?.charAt(0).toUpperCase()}
  </div>

  {/* Dropdown Menu */}
  {showDropdown && (
    <div className="profile-dropdown">

      <div className="profile-info">
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
      </div>

      <button
      className="dropdown-logout"
      onClick={handleLogout}
      >
        <FiLogOut />
        Logout
      </button>

      </div>
  )}

      </div>
    </div>
  </div>
  );
};

export default Navbar;