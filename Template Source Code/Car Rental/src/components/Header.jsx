import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Home, Car, PhoneCall, Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="site-header">
      {/* Logo */}
      <Link to="/" className="header-logo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "white" }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #ff8500 0%, #ff5500 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 4px 12px rgba(255, 133, 0, 0.35)"
        }}>
          <Car size={20} />
        </div>
        <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.5px", color: "white" }}>
          Drive<span style={{ color: "#ff8500" }}>X</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <Home size={15} className="nav-icon" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/cars"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <Car size={15} className="nav-icon" />
          <span>Cars</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <PhoneCall size={15} className="nav-icon" />
          <span>Contact Us</span>
        </NavLink>
      </nav>

      {/* Book button */}
      <Link to="/cars">
        <button className="header-book-button" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <Sparkles size={15} /> Book a Car
        </button>
      </Link>
    </header>
  );
}

export default Header;

