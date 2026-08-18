import React from "react";
function CarDetailsModal({ car, onClose, onBook }) {
  if (!car) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="details-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="details-image">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
          />
        </div>

        <div className="details-content">

          <p className="car-brand">
            {car.brand}
          </p>

          <h2>
            {car.model}
          </h2>

          <div className="details-rating">
            ★ {car.rating}
          </div>

          <p className="details-description">
            {car.description}
          </p>

          <div className="details-spec-grid">

            <div>
              <span>Transmission</span>
              <strong>{car.transmission}</strong>
            </div>

            <div>
              <span>Fuel</span>
              <strong>{car.fuel}</strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{car.seats}</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>{car.location}</strong>
            </div>

          </div>

          <h4>Features</h4>

          <div className="feature-tags">
            {car.features.map((feature) => (
              <span key={feature}>
                {feature}
              </span>
            ))}
          </div>

          <div className="details-bottom">

            <div className="price">
              <strong>
                ₹{car.price.toLocaleString("en-IN")}
              </strong>

              <span>/ day</span>
            </div>

            <button
              className="primary-btn"
              onClick={() => {
                onClose();
                onBook(car);
              }}
            >
              Book This Car
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CarDetailsModal;