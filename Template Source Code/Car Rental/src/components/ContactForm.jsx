import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We will get back to you shortly.");
  };

  return (
    <>
      <Header />

      <main>
        <section className="contact-hero">
          <p>GET IN TOUCH</p>

          <h1>
            Let's Get You
            <br />
            <span>On The Road.</span>
          </h1>

          <p>
            Have questions about our cars or rental services?
            We're here to help.
          </p>
        </section>

        <section className="contact-section">
          <div className="contact-info">
            <p>CONTACT INFORMATION</p>

            <h2>We're here to help.</h2>

            <div className="contact-item">
              <strong>Phone</strong>
              <span>+91 90000 00000</span>
            </div>

            <div className="contact-item">
              <strong>Email</strong>
              <span>support@drivex.com</span>
            </div>

            <div className="contact-item">
              <strong>Office</strong>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>

            <div className="contact-item">
              <strong>Business Hours</strong>
              <span>Mon - Sun · 8:00 AM - 10:00 PM</span>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h2>Send Us a Message</h2>

            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Write your message..."
              rows="6"
              required
            />

            <button
              type="submit"
              className="primary-button"
            >
              Send Message →
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;