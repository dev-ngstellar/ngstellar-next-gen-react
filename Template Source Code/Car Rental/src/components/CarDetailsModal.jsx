import React from "react";
import { X, Star, CheckCircle2, Gauge, Fuel, Users, MapPin, CalendarCheck } from "lucide-react";

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
          aria-label="Close modal"
        >
          <X size={20} />
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

          <div className="details-rating" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <span>{car.rating}</span>
          </div>

          <p className="details-description">
            {car.description}
          </p>

          <div className="details-spec-grid">
            <div>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Gauge size={12} style={{ color: "#ff8500" }} /> Transmission
              </span>
              <strong>{car.transmission}</strong>
            </div>

            <div>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Fuel size={12} style={{ color: "#ff8500" }} /> Fuel
              </span>
              <strong>{car.fuel}</strong>
            </div>

            <div>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Users size={12} style={{ color: "#ff8500" }} /> Seats
              </span>
              <strong>{car.seats}</strong>
            </div>

            <div>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={12} style={{ color: "#ff8500" }} /> Location
              </span>
              <strong>{car.location}</strong>
            </div>
          </div>

          <h4 style={{ margin: "0 0 10px", fontSize: "14px", color: "#071a32" }}>Key Features</h4>

          <div className="feature-tags">
            {car.features.map((feature) => (
              <span key={feature} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <CheckCircle2 size={13} style={{ color: "#ff8500" }} /> {feature}
              </span>
            ))}
          </div>

          <div className="details-bottom">
            <div className="price">
              <strong>
                ₹{car.price ? car.price.toLocaleString("en-IN") : car.price}
              </strong>
              <span> / day</span>
            </div>

            <button
              className="primary-btn"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "auto", padding: "0 24px" }}
              onClick={() => {
                onClose();
                onBook(car);
              }}
            >
              <CalendarCheck size={18} /> Book This Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsModal;