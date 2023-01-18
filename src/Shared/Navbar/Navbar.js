import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/manageInventory">Manage Inventory Here</Link>
      </nav>
    </div>
  );
};

export default Navbar;
