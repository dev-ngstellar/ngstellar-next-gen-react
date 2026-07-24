import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  PackagePlus,
  DollarSign,
  Boxes,
  Truck,
  Image as ImageIcon,
  Layers,
  Barcode,
  Eye,
  ArrowRight,
  ArrowLeft,
  Plus,
  Sparkles,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const { addProduct, categories, brands, warehouses, suppliers } = useInventory();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    barcode: '',
    category: categories[0]?.name || 'Computer Hardware',
    brand: brands[0]?.name || 'Logitech',
    warehouse: warehouses[0]?.name || 'Austin Mega Distribution Center',
    quantity: 100,
    minStockAlert: 20,
    purchasePrice: 50.0,
    sellingPrice: 89.99,
    supplier: suppliers[0]?.name || 'Logitech Direct Supply',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
    description: '',
    binLocation: 'A-04-12',
  });

  const steps = [
    { number: 1, title: 'General Info', icon: PackagePlus },
    { number: 2, title: 'Pricing & Tax', icon: DollarSign },
    { number: 3, title: 'Inventory Setup', icon: Boxes },
    { number: 4, title: 'Supplier & Hub', icon: Truck },
    { number: 5, title: 'Image & Barcode', icon: Barcode },
    { number: 6, title: 'Live Preview', icon: Eye },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit Product
      addProduct(formData);
      navigate('/products');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-txt-heading">Add New Product</h1>
        <p className="text-xs text-txt-muted">
          Catalog a new item in your inventory system with complete pricing, barcode, and warehouse location details.
        </p>
      </div>

      {/* Step Progress Indicator Bar */}
      <div className="p-4 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card">
        <div className="flex items-center justify-between overflow-x-auto gap-2">
          {steps.map((s) => {
            const Icon = s.icon;
            const isCompleted = s.number < currentStep;
            const isCurrent = s.number === currentStep;

            return (
              <div
                key={s.number}
                onClick={() => setCurrentStep(s.number)}
                className={`flex items-center space-x-2 cursor-pointer transition-all shrink-0 ${
                  isCurrent
                    ? 'text-accent-primary font-bold'
                    : isCompleted
                    ? 'text-accent-success font-semibold'
                    : 'text-txt-muted'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-accent-primary text-white shadow-glow-sm'
                      : isCompleted
                      ? 'bg-accent-success/20 text-accent-success'
                      : 'bg-bg-surface text-txt-muted'
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className="hidden sm:inline text-xs">{s.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Multi-Step Form Body */}
      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-6">
        <AnimatePresence mode="wait">
          {/* STEP 1: General Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-base font-extrabold text-txt-heading">General Information</h2>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Product Title</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Logitech MX Master 3S Wireless Mouse"
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">SKU Code</label>
                  <input
                    type="text"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    placeholder="SKU-LOG-MX3S"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Barcode (UPC/EAN)</label>
                  <input
                    type="text"
                    value={formData.barcode}
                    onChange={(e) => setFormData({ ...formData, barcode: e.target.value })}
                    placeholder="097855171832"
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Brand / Manufacturer</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
                  >
                    {brands.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed specifications, warranty details, and box contents..."
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 2: Pricing & Tax */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-base font-extrabold text-txt-heading">Pricing & Profit Margin Setup</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Purchase Price ($ Cost)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({ ...formData, purchasePrice: Number(e.target.value) })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Selling Price ($ Retail)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.sellingPrice}
                    onChange={(e) => setFormData({ ...formData, sellingPrice: Number(e.target.value) })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-bold text-accent-primary"
                  />
                </div>
              </div>

              {/* Profit Margin Preview Box */}
              <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-txt-muted block uppercase font-bold">Estimated Profit per Unit</span>
                  <span className="text-base font-extrabold text-accent-success">
                    +${(formData.sellingPrice - formData.purchasePrice).toFixed(2)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-txt-muted block uppercase font-bold">Gross Margin %</span>
                  <span className="text-base font-extrabold text-accent-primary">
                    {formData.sellingPrice > 0
                      ? Math.round(((formData.sellingPrice - formData.purchasePrice) / formData.sellingPrice) * 100)
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Inventory Setup */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-base font-extrabold text-txt-heading">Initial Inventory & Storage Limits</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Initial Stock Quantity</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-txt-heading">Minimum Stock Alert Level</label>
                  <input
                    type="number"
                    value={formData.minStockAlert}
                    onChange={(e) => setFormData({ ...formData, minStockAlert: Number(e.target.value) })}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-bold text-accent-warning"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Storage Shelf / Bin Location</label>
                <input
                  type="text"
                  value={formData.binLocation}
                  onChange={(e) => setFormData({ ...formData, binLocation: e.target.value })}
                  placeholder="e.g. Zone A - Rack 04 - Shelf 12"
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-mono"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 4: Supplier & Hub */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-base font-extrabold text-txt-heading">Warehouse & Supplier Allocation</h2>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Target Warehouse</label>
                <select
                  value={formData.warehouse}
                  onChange={(e) => setFormData({ ...formData, warehouse: e.target.value })}
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none font-medium"
                >
                  {warehouses.map((w) => (
                    <option key={w.id} value={w.name}>
                      {w.name} ({w.location})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Primary Supplier Vendor</label>
                <select
                  value={formData.supplier}
                  onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none font-medium"
                >
                  {suppliers.map((sup) => (
                    <option key={sup.id} value={sup.name}>
                      {sup.name}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Image & Barcode */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-base font-extrabold text-txt-heading">Product Thumbnail Image URL</h2>

              <div className="space-y-1">
                <label className="text-xs font-bold text-txt-heading">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-mono"
                />
              </div>

              <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle flex items-center space-x-4">
                <img src={formData.image} alt="Preview" className="w-20 h-20 rounded-xl object-cover ring-2 ring-accent-primary/20" />
                <div className="text-xs text-txt-muted">
                  <p className="font-bold text-txt-heading">Thumbnail Live Preview</p>
                  <p className="mt-1">High resolution clear product image recommended.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 6: Live Preview & Confirm */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-accent-success/20 text-accent-success flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-txt-heading">Ready to Add Product!</h2>
                <p className="text-xs text-txt-muted">Review card summary before publishing to global inventory.</p>
              </div>

              <div className="max-w-sm mx-auto p-5 rounded-2xl bg-bg-card border border-border-main shadow-float text-left space-y-3">
                <img src={formData.image} alt="" className="w-full h-36 rounded-xl object-cover" />
                <div>
                  <span className="text-[10px] font-bold text-accent-primary uppercase">{formData.category}</span>
                  <h3 className="text-base font-extrabold text-txt-heading">{formData.name || 'Untitled Item'}</h3>
                  <p className="text-xs font-mono text-txt-muted">SKU: {formData.sku || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-xs">
                  <span className="font-extrabold text-accent-primary">${formData.sellingPrice.toFixed(2)}</span>
                  <span className="font-bold text-txt-heading">{formData.quantity} units initial stock</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
              currentStep === 1
                ? 'opacity-40 cursor-not-allowed bg-bg-surface text-txt-muted'
                : 'bg-bg-surface hover:bg-bg-hover text-txt-heading'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-2 glow-button"
          >
            <span>{currentStep === steps.length ? 'Publish Product' : 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
