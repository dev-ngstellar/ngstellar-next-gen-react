import React, { useState } from "react";
import { X, MapPin, Calendar, User, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

function BookingModal({ car, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!car) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="booking-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-heading">
              <p>BOOK YOUR CAR</p>

              <h2>
                {car.brand} {car.model}
              </h2>

              <span>
                ₹{car.price.toLocaleString("en-IN")} / day
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={13} style={{ color: "#ff8500" }} /> Pick-up Location
                  </label>
                  <input
                    required
                    placeholder="Coimbatore Airport"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin size={13} style={{ color: "#ff8500" }} /> Drop-off Location
                  </label>
                  <input
                    required
                    placeholder="Coimbatore Airport"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={13} style={{ color: "#ff8500" }} /> Pick-up Date
                  </label>
                  <input
                    required
                    type="date"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={13} style={{ color: "#ff8500" }} /> Drop-off Date
                  </label>
                  <input
                    required
                    type="date"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <User size={13} style={{ color: "#ff8500" }} /> Your Name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Phone size={13} style={{ color: "#ff8500" }} /> Phone
                  </label>
                  <input
                    required
                    placeholder="+91"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="primary-btn full"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <ShieldCheck size={18} /> Confirm Booking
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon">
              <CheckCircle2 size={36} />
            </div>

            <p style={{ color: "#ff8500", fontWeight: 800, fontSize: "12px", letterSpacing: "1px" }}>
              BOOKING REQUEST CONFIRMED
            </p>

            <h2 style={{ margin: "8px 0" }}>
              You're all set!
            </h2>

            <p style={{ color: "#687385", marginBottom: "24px" }}>
              Your booking request for{" "}
              <strong>
                {car.brand} {car.model}
              </strong>{" "}
              has been received. We will contact you shortly to complete confirmation.
            </p>

            <button
              className="primary-btn"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;