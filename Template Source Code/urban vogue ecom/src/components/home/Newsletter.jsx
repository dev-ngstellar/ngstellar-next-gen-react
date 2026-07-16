import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block">
            Vogue Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-black">
            Join The Inner Circle
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed tracking-wide">
            Subscribe to receive priority access to seasonal collections, editorial journals, and exclusive member-only invitations.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto pt-4">
          {submitted ? (
            <div className="animate-[fade-in_0.5s_ease-out] text-green-700 bg-green-50 border border-green-200/50 py-4 px-6 text-xs tracking-widest uppercase font-light">
              ✓ Welcome to Urban Vogue. Your invitation is on the way.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center border-b border-black py-2 focus-within:border-black/50 transition-colors">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL ADDRESS..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none text-xs text-black placeholder-black/35 focus:outline-none focus:ring-0 w-full uppercase tracking-widest font-light py-2 px-1 text-center sm:text-left"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white text-[10px] tracking-widest uppercase py-3 px-8 font-light hover:bg-neutral-850 transition-colors mt-4 sm:mt-0 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Footer Subtext */}
        <p className="text-[9px] text-gray-400 font-light tracking-wider uppercase">
          By signing up, you agree to our Privacy Policy. Opt-out at any time.
        </p>

      </div>
    </section>
  );
};

export default Newsletter;
