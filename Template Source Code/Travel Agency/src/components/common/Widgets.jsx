import React, { useState } from 'react';
import { Sun, CloudRain, DollarSign, RefreshCw, ShieldCheck, FileCheck, ArrowRight, Check } from 'lucide-react';

export function WeatherWidget() {
  const [selectedCity, setSelectedCity] = useState('Maldives');

  const cityData = {
    'Maldives': { temp: '29°C', condition: 'Sunny Tropical', humidity: '72%', wind: '12 km/h' },
    'Santorini': { temp: '26°C', condition: 'Sea Breeze', humidity: '55%', wind: '18 km/h' },
    'Swiss Alps': { temp: '-2°C', condition: 'Powder Snow', humidity: '80%', wind: '8 km/h' },
    'Kyoto': { temp: '18°C', condition: 'Pleasant Spring', humidity: '60%', wind: '10 km/h' },
  };

  const current = cityData[selectedCity];

  return (
    <div className="glass-card rounded-3xl p-6 border border-border space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
          <Sun className="w-4 h-4 text-amber-400" /> Live Destination Weather
        </span>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="bg-background text-xs font-bold text-text-bright border border-border rounded-xl px-3 py-1.5 focus:outline-none cursor-pointer"
        >
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="font-heading text-4xl font-black text-text-bright">{current.temp}</span>
          <span className="text-xs font-semibold text-text-muted block mt-0.5">{current.condition}</span>
        </div>
        <div className="text-right space-y-1 text-xs text-text-muted">
          <div>Humidity: <strong className="text-text-bright">{current.humidity}</strong></div>
          <div>Wind Speed: <strong className="text-text-bright">{current.wind}</strong></div>
        </div>
      </div>
    </div>
  );
}

export function CurrencyConverterWidget() {
  const [amount, setAmount] = useState(1000);
  const [fromCurr, setFromCurr] = useState('USD');
  const [toCurr, setToCurr] = useState('EUR');

  const rates = {
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 154.5,
    AED: 3.67,
    AUD: 1.52,
  };

  const converted = ((amount * rates[toCurr]) / rates[fromCurr]).toFixed(2);

  return (
    <div className="glass-card rounded-3xl p-6 border border-border space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
          <DollarSign className="w-4 h-4 text-emerald-400" /> Travel Currency Converter
        </span>
        <span className="text-[10px] text-text-muted">Live Mid-Market Rates</span>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-text-muted uppercase">Amount ({fromCurr})</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm font-bold text-text-bright focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-text-muted uppercase">Convert To</label>
          <select
            value={toCurr}
            onChange={(e) => setToCurr(e.target.value)}
            className="w-full bg-background border border-border rounded-xl px-3 py-2 text-sm font-bold text-text-bright focus:outline-none cursor-pointer"
          >
            {Object.keys(rates).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-3 rounded-2xl bg-surface border border-border flex items-center justify-between text-xs">
        <span className="text-text-muted font-medium">Estimated Value:</span>
        <span className="font-heading text-lg font-extrabold text-emerald-500">{converted} {toCurr}</span>
      </div>
    </div>
  );
}

export function VisaAssistanceSection() {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-2 max-w-xl">
        <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
          <FileCheck className="w-4 h-4 text-gold" /> Seamless Global Entry
        </span>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-bright">
          VIP Expedited Visa & Passport Concierge
        </h3>
        <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
          Skip embassy queues. Our dedicated diplomatic relations team handles fast-track visas, Schengen multi-entry permits, and biometrics assistance worldwide.
        </p>
      </div>

      <button className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs shadow-lg shadow-amber-500/25 hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2">
        <span>Apply for Visa Assist</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function TravelInsuranceSection() {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-border space-y-6">
      <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
        <ShieldCheck className="w-4 h-4" /> Comprehensive Protection
      </div>
      <h3 className="font-heading text-2xl font-bold text-text-bright">
        VOYAGE Royal Shield Insurance Coverage
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Check className="w-4 h-4" /> 100% Medical Protection
          </div>
          <p className="text-text-muted text-[11px]">Up to $1,000,000 global emergency evacuation & private hospital admission.</p>
        </div>

        <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Check className="w-4 h-4" /> Any-Reason Cancellation
          </div>
          <p className="text-text-muted text-[11px]">Full reimbursement on pre-paid resort vouchers and charter flights.</p>
        </div>

        <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Check className="w-4 h-4" /> Luxury Baggage Guard
          </div>
          <p className="text-text-muted text-[11px]">Up to $25,000 instant coverage for high-end gear and personal belongings.</p>
        </div>
      </div>
    </div>
  );
}
