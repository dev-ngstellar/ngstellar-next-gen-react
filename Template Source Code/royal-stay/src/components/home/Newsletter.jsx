import React, { useState } from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-white border-t border-[#c5a880]/15">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#faf9f6] border border-[#c5a880]/30 p-8 md:p-16 text-center relative overflow-hidden flex flex-col items-center">
          {/* Ambient graphics */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c5a880]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#c5a880]/10 to-transparent pointer-events-none" />

          {/* Sparkle Icon */}
          <div className="text-[#c5a880] mb-4">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <span className="text-xs tracking-[0.25em] uppercase text-black/50 font-semibold mb-2">Exclusive Circle</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 text-[#1a1a1a]">
            Newsletter Sign-up
          </h2>
          <p className="text-xs md:text-sm font-light text-[#1a1a1a]/60 max-w-xl leading-relaxed mb-8">
            Join the Royal Stay Club to receive updates on private sales, seasonal spa discounts, room upgrade opportunities, and culinary news.
          </p>

          {subscribed ? (
            <div className="bg-[#c5a880]/10 border border-[#c5a880]/30 p-4 max-w-md mx-auto text-[#8e6e43] text-sm tracking-wider uppercase font-semibold">
              Thank you! You have successfully subscribed to our newsletter.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 border border-[#c5a880]/20 p-1.5 bg-white">
              <div className="flex items-center gap-2 px-3 flex-grow py-2.5 sm:py-0">
                <Mail className="w-4 h-4 text-[#c5a880]" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-sm text-[#1a1a1a] placeholder-black/30 focus:outline-none w-full font-light"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1a1a1a] text-white hover:bg-[#c5a880] hover:text-[#1a1a1a] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <span className="text-[10px] text-black/40 font-light mt-4">
            We value your privacy. Unsubscribe at any time.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
