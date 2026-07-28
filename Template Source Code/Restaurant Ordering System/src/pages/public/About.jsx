import React from 'react';
import { Award, Clock, HeartHandshake, ShieldCheck, Users, UtensilsCrossed } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const About = () => {
  const { setCurrentView } = useApp();

  const chefs = [
    {
      name: 'Chef Antoine Laurent',
      role: 'Executive Culinary Director',
      bio: '3 Michelin Stars veteran, formerly Head Chef at Le Meurice Paris.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Chef Mei-Ling Zhang',
      role: 'Master Pastry Architect',
      bio: 'World Pastry Champion 2022, specializing in gold-leaf chocolate sculptures.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Chef Alessandro Rossi',
      role: 'Artisanal Pizza & Pasta Director',
      bio: 'Neapolitan sourdough master with over 18 years of wood-fired perfection.',
      image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const timeline = [
    { year: '2018', title: 'The Genesis', desc: 'Opened our flagship dining room with 8 tables and an obsessive focus on organic wood-fired cooking.' },
    { year: '2021', title: 'Michelin Recognition', desc: 'Awarded 2 Michelin Stars for innovative high-temp fermentations and farm-to-table ethics.' },
    { year: '2024', title: 'Gourmetium Digital Commerce', desc: 'Engineered a bespoke luxury delivery system bringing 3-star dining to private residences.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Our Culinary Legacy</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-100 leading-tight">
          Where Gastronomy Meets Uncompromising Perfection.
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Founded on the philosophy that dining is an art form, Gourmetium bridges traditional open-fire craftsmanship with modern culinary science.
        </p>
      </div>

      {/* Story & Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">The Philosophy</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Sustainably Sourced. Precision Fermented. Crafted Fresh Daily.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Every morning before sunrise, our culinary team receives wild line-caught seafood, heirloom vegetables from biodynamic farms, and imported black truffles from Umbria. We believe true luxury lies in absolute ingredient integrity.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div>
              <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">100% Organic</h4>
              <p className="text-xs text-stone-500">Local Farm Direct</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">3 Stars</h4>
              <p className="text-xs text-stone-500">Michelin Trained Brigade</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
            alt="Restaurant Atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Master Chefs Section */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Master Artisans</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">Meet Our Culinary Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef, idx) => (
            <div key={idx} className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src={chef.image} alt={chef.name} className="w-full h-64 object-cover" />
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-bold text-amber-500 uppercase">{chef.role}</span>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">{chef.name}</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{chef.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Our Evolution</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">Milestones of Mastery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-stone-50 dark:bg-stone-900/50 border border-stone-200/60 dark:border-stone-800 space-y-3">
              <span className="font-serif text-3xl font-extrabold text-amber-500">{item.year}</span>
              <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">{item.title}</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
