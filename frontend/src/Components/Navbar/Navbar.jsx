import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import carticon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [menu, setMenu] = useState(" ");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#7d7d7d" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" , color: "#7d7d7d"}} to="/men">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" , color: "#7d7d7d"}} to="/women">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" , color: "#7d7d7d"}} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={carticon} className="carticonlogo" alt="" />
        </Link>
        <div className="navcartcount">0</div>
      </div>
    </div>
  );
};
