import React, { useState } from "react";
import { Star, Heart, Gauge, Users, Fuel, ArrowRight } from "lucide-react";

function CarCard({ car, onView, onBook }) {
  const [isFavorite, setIsFavorite] = useState(false);

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
        <button
          type="button"
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          title="Save to favorites"
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            color: isFavorite ? "#ef4444" : "#071a32",
            fill: isFavorite ? "#ef4444" : "none",
          }}
        >
          <Heart className="icon-sm" size={16} />
        </button>
      </div>

      <div className="car-content">
        <h3 className="car-name">
          {car.brand} {car.model}
        </h3>

        <div className="car-rating" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Star className="icon-star" size={15} fill="#f59e0b" color="#f59e0b" />
          <span>{car.rating}</span>
          <span style={{ color: "#687385", fontWeight: 400 }}>({car.year})</span>
        </div>

        <p className="car-type">{car.type}</p>

        <div className="car-features">
          <span className="car-feature">
            <Gauge size={14} style={{ color: "#ff8500" }} /> {car.transmission}
          </span>
          <span className="car-feature">
            <Users size={14} style={{ color: "#ff8500" }} /> {car.seats} Seats
          </span>
          <span className="car-feature">
            <Fuel size={14} style={{ color: "#ff8500" }} /> {car.fuel}
          </span>
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
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
            onClick={() => onBook && onBook(car)}
          >
            Rent <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
