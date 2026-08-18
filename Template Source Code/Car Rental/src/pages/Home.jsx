import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Car,
  MapPin,
  Headphones,
  Calendar,
  Search,
  ArrowRight,
  ShieldCheck,
  Tag,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { cars } from "../data/carRentalData";
import CarCard from "../components/CarCard";
import CarDetailsModal from "../components/CarDetailsModal";
import BookingModal from "../components/BookingModal";

function Home() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    pickupLocation: "Coimbatore Airport",
    dropoffLocation: "Coimbatore Airport",
    pickupDate: "",
    dropoffDate: "",
  });

  const [selectedDetailCar, setSelectedDetailCar] = useState(null);
  const [selectedBookingCar, setSelectedBookingCar] = useState(null);

  const featuredCars = cars.slice(0, 4);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/cars");
  };

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={14} style={{ color: "#ff8500" }} /> PREMIUM CAR RENTALS
          </p>

          <h1 className="hero-title">
            Your Journey
            <span>Starts Here.</span>
          </h1>

          <p className="hero-description">
            Rent the perfect car for every journey.
            Simple booking, flexible options, and great prices.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-icon">
                <Car size={18} />
              </span>
              <span><strong>500+</strong> Cars</span>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-icon">
                <MapPin size={18} />
              </span>
              <span><strong>25+</strong> Locations</span>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-icon">
                <Headphones size={18} />
              </span>
              <span><strong>24/7</strong> Support</span>
            </div>
          </div>
        </div>

        {/* SEARCH BOX */}
        <div className="booking-box">
          <form className="booking-form" onSubmit={handleSearch}>
            <div className="booking-field">
              <label htmlFor="pickupLocation" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={13} style={{ color: "#ff8500" }} /> Pick-up Location
              </label>
              <input
                id="pickupLocation"
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={handleChange}
                placeholder="Coimbatore Airport"
              />
            </div>

            <div className="booking-field">
              <label htmlFor="dropoffLocation" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={13} style={{ color: "#ff8500" }} /> Drop-off Location
              </label>
              <input
                id="dropoffLocation"
                name="dropoffLocation"
                value={form.dropoffLocation}
                onChange={handleChange}
                placeholder="Coimbatore Airport"
              />
            </div>

            <div className="booking-field">
              <label htmlFor="pickupDate" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar size={13} style={{ color: "#ff8500" }} /> Pick-up Date
              </label>
              <input
                id="pickupDate"
                name="pickupDate"
                type="date"
                value={form.pickupDate}
                onChange={handleChange}
              />
            </div>

            <div className="booking-field">
              <label htmlFor="dropoffDate" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar size={13} style={{ color: "#ff8500" }} /> Drop-off Date
              </label>
              <input
                id="dropoffDate"
                name="dropoffDate"
                type="date"
                value={form.dropoffDate}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="search-button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <Search size={16} /> Search Cars
            </button>
          </form>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="featured-section">
        <div className="section-header">
          <div>
            <p className="section-label">OUR COLLECTION</p>
            <h2 className="section-title">Featured Cars</h2>
            <p className="section-description">
              Explore our most popular and well-maintained vehicles.
            </p>
          </div>

          <Link to="/cars" className="view-all" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            View All Cars <ArrowRight size={16} />
          </Link>
        </div>

        <div className="car-grid">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onView={(c) => setSelectedDetailCar(c)}
              onBook={(c) => setSelectedBookingCar(c)}
            />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="section-header why-header" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p className="section-label">WHY DRIVEX?</p>
          <h2 className="section-title">Better Cars. Better Experience.</h2>
          <p className="section-description">
            Everything you need for a smooth and comfortable journey.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <Car size={22} />
            </div>
            <h3>Wide Selection</h3>
            <p>Choose from hundreds of well-maintained vehicles ranging from economic sedans to luxury SUVs.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Tag size={22} />
            </div>
            <h3>Best Prices</h3>
            <p>Transparent pricing with no hidden charges, complete with comprehensive insurance options.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <CalendarCheck size={22} />
            </div>
            <h3>Flexible Booking</h3>
            <p>Easy online booking, instant confirmations, and hassle-free cancellation options anytime.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Headphones size={22} />
            </div>
            <h3>24/7 Support</h3>
            <p>Our dedicated road assistance and customer service team is always available to help you.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-content">
            <p className="cta-label">READY TO DRIVE?</p>
            <h2 className="cta-title">
              Ready to Hit<br />
              The Road?
            </h2>
            <p className="cta-description">
              Book your perfect car today and enjoy an unforgettable driving experience.
            </p>
            <Link to="/cars" className="cta-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Browse Cars <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {selectedDetailCar && (
        <CarDetailsModal
          car={selectedDetailCar}
          onClose={() => setSelectedDetailCar(null)}
          onBook={(c) => setSelectedBookingCar(c)}
        />
      )}

      {selectedBookingCar && (
        <BookingModal
          car={selectedBookingCar}
          onClose={() => setSelectedBookingCar(null)}
        />
      )}
    </div>
  );
}

export default Home;
