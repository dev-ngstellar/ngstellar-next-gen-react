import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      {/* Logo */}
      <Link to="/" className="header-logo">
        Drive<span>X</span>
      </Link>

      {/* Navigation */}
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/cars"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cars
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      {/* Book button */}
      <Link to="/cars">
        <button className="header-book-button">
          Book a Car
        </button>
      </Link>
    </header>
  );
}

export default Header;