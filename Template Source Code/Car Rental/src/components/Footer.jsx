import React from "react";
import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Car size={26} style={{ color: "#ff8500" }} /> Drive<span>X</span>
          </h2>
          <p>Your trusted car rental partner for every journey. Premium vehicles, simple booking, and 24/7 customer support.</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <span>FAQ</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Phone size={14} style={{ color: "#ff8500" }} /> +91 90000 00000
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Mail size={14} style={{ color: "#ff8500" }} /> support@drivex.com
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MapPin size={14} style={{ color: "#ff8500" }} /> Coimbatore, Tamil Nadu
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DriveX Car Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
