import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <nav className="navbar">
      <h1>Task Management App</h1>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
