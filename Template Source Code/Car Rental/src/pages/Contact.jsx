import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-label">GET IN TOUCH</p>

          <h1>
            Let's Get You
            <br />
            <span>On The Road.</span>
          </h1>

          <p className="contact-intro">
            Have questions about our cars or rental services?
            We're here to help.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <p className="contact-label">CONTACT INFORMATION</p>

          <h2>We're here to help.</h2>

          <div className="contact-item">
            <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Phone size={15} style={{ color: "#ff8500" }} /> Phone
            </strong>
            <span>+91 90000 00000</span>
          </div>

          <div className="contact-item">
            <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Mail size={15} style={{ color: "#ff8500" }} /> Email
            </strong>
            <span>support@drivex.com</span>
          </div>

          <div className="contact-item">
            <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <MapPin size={15} style={{ color: "#ff8500" }} /> Office
            </strong>
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>

          <div className="contact-item">
            <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={15} style={{ color: "#ff8500" }} /> Business Hours
            </strong>
            <span>Mon - Sun · 8:00 AM - 10:00 PM</span>
          </div>
        </div>

        <div className="contact-form">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              />

              <button
                type="submit"
                className="primary-button"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                Send Message <Send size={15} />
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 10px" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "#eefbf3",
                  color: "#10b981",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h2 style={{ marginBottom: "10px" }}>Message Sent!</h2>
              <p style={{ color: "#687385", marginBottom: "24px" }}>
                Thank you for contacting DriveX. Our team will review your inquiry and get back to you shortly.
              </p>
              <button
                type="button"
                className="primary-button"
                style={{ maxWidth: "200px" }}
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
