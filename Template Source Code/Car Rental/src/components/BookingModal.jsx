import React, { useState } from "react";

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
        >
          ×
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
                  <label>Pick-up Location</label>
                  <input
                    required
                    placeholder="Coimbatore Airport"
                  />
                </div>

                <div className="form-group">
                  <label>Drop-off Location</label>
                  <input
                    required
                    placeholder="Coimbatore Airport"
                  />
                </div>

                <div className="form-group">
                  <label>Pick-up Date</label>
                  <input
                    required
                    type="date"
                  />
                </div>

                <div className="form-group">
                  <label>Drop-off Date</label>
                  <input
                    required
                    type="date"
                  />
                </div>

                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    required
                    placeholder="+91"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="primary-btn full"
              >
                Confirm Booking
              </button>

            </form>
          </>
        ) : (
          <div className="booking-success">

            <div className="success-icon">
              ✓
            </div>

            <p>BOOKING REQUEST SENT</p>

            <h2>
              You're all set!
            </h2>

            <p>
              Your booking request for{" "}
              <strong>
                {car.brand} {car.model}
              </strong>{" "}
              has been received.
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