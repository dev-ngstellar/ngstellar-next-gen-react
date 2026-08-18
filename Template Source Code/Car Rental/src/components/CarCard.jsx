import React from "react";

function CarCard({ car, onView, onBook }) {
  return (
    <article className="car-card">
      <div className="car-image-wrapper">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="car-image"
        />
        {car.rating >= 4.8 && (
          <span className="popular-badge">Popular</span>
        )}
        <button type="button" className="favorite-button" title="Save to favorites">
          ♡
        </button>
      </div>

      <div className="car-content">
        <h3 className="car-name">
          {car.brand} {car.model}
        </h3>

        <div className="car-rating">
          ★ {car.rating} <span style={{ color: "#687385", fontWeight: 400 }}>({car.year})</span>
        </div>

        <p className="car-type">{car.type}</p>

        <div className="car-features">
          <span className="car-feature">⚙ {car.transmission}</span>
          <span className="car-feature">👥 {car.seats} Seats</span>
          <span className="car-feature">⛽ {car.fuel}</span>
        </div>

        <div className="car-price">
          ₹{car.price ? car.price.toLocaleString("en-IN") : car.price} <span>/ day</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "14px" }}>
          <button
            type="button"
            className="rent-button"
            style={{ background: "#eef2f6", color: "#071a32" }}
            onClick={() => onView && onView(car)}
          >
            Details
          </button>
          <button
            type="button"
            className="rent-button"
            onClick={() => onBook && onBook(car)}
          >
            Rent →
          </button>
        </div>
      </div>
    </article>
  );
}

export default CarCard;