import React from 'react';

const FeaturesGallery = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Features</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Explore Our Features</h2>
          <p className="mt-4 text-lg text-slate-600">
            Discover the powerful tools and capabilities that drive our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder items */}
            {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400">
                        Feature Image
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Feature {item}</h3>
                    <p className="text-slate-500">
                        Description of the feature goes here. It explains the benefits and how it works.
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGallery;
