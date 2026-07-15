import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Set default check-in to tomorrow, and check-out to 3 days after tomorrow
  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getThreeDaysLater = () => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return d.toISOString().split('T')[0];
  };

  const [checkIn, setCheckIn] = useState(getTomorrow());
  const [checkOut, setCheckOut] = useState(getThreeDaysLater());
  const [guests, setGuests] = useState(2);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [bookings, setBookings] = useState([]);

  const updateSearch = (inDate, outDate, guestCount) => {
    if (inDate) setCheckIn(inDate);
    if (outDate) setCheckOut(outDate);
    if (guestCount) setGuests(Number(guestCount));
  };

  const selectRoom = (roomId) => {
    setSelectedRoomId(roomId);
  };

  const clearBooking = () => {
    setSelectedRoomId(null);
    setGuestInfo({ name: '', email: '', phone: '' });
  };

  const confirmBooking = (bookingData) => {
    const newBooking = {
      id: `RS-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString(),
      ...bookingData
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  return (
    <BookingContext.Provider
      value={{
        checkIn,
        checkOut,
        guests,
        selectedRoomId,
        guestInfo,
        bookings,
        setCheckIn,
        setCheckOut,
        setGuests,
        setSelectedRoomId,
        setGuestInfo,
        updateSearch,
        selectRoom,
        clearBooking,
        confirmBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
