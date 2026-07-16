import React from 'react';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
        <MdErrorOutline className="text-4xl" />
      </div>
      <h1 className="text-4xl font-extrabold text-text-primary tracking-tight mb-3">
        404 - Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-text-secondary max-w-md mb-8 leading-relaxed">
        The route you requested could not be resolved. Please return to the homepage or check the navigation links above.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow transition-colors cursor-pointer"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
