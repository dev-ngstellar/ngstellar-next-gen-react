import React, { useState, useMemo } from "react";
import { cars } from "../data/carRentalData";
import CarCard from "../components/CarCard";
import CarDetailsModal from "../components/CarDetailsModal";
import BookingModal from "../components/BookingModal";

function Cars() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Recommended");
  const [selectedDetailCar, setSelectedDetailCar] = useState(null);
  const [selectedBookingCar, setSelectedBookingCar] = useState(null);

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const matchesSearch =
        `${car.brand} ${car.model}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType = type === "All" || car.type === type;

      return matchesSearch && matchesType;
    });

    if (sort === "Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, type, sort]);

  return (
    <div className="cars-page">
      <section className="cars-hero">
        <p className="section-label" style={{ color: "#ff8500" }}>OUR FLEET</p>
        <h1>Find Your Perfect Car</h1>
        <p>
          Choose from our collection of comfortable, reliable and premium vehicles.
        </p>
      </section>

      <div className="cars-content">
        <div className="cars-layout">
          {/* SIDEBAR FILTER */}
          <aside className="filter-bar">
            <h3>Filter & Search</h3>

            <div className="filter-group">
              <label htmlFor="search-car">Search Car</label>
              <input
                id="search-car"
                type="text"
                placeholder="Search brand or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="type-filter">Vehicle Category</label>
              <select
                id="type-filter"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-filter">Sort By Price</label>
              <select
                id="sort-filter"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="Recommended">Recommended</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* MAIN CAR GRID */}
          <main>
            {filteredCars.length > 0 ? (
              <div className="car-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onView={(c) => setSelectedDetailCar(c)}
                    onBook={(c) => setSelectedBookingCar(c)}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "16px" }}>
                <h3>No vehicles found</h3>
                <p style={{ color: "#687385" }}>Try adjusting your search criteria or resetting filters.</p>
                <button
                  type="button"
                  className="primary-button"
                  style={{ width: "auto", padding: "10px 24px", marginTop: "12px" }}
                  onClick={() => { setSearch(""); setType("All"); setSort("Recommended"); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

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

export default Cars;