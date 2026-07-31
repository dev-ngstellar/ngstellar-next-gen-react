import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, QrCode, Printer, Download, CheckCircle2 } from 'lucide-react';

export default function BarcodeModal() {
  const { barcodeProduct, setBarcodeProduct, addToast } = useStore();

  if (!barcodeProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={() => setBarcodeProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          Retail Barcode & QR Label
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Enterprise Stock Tracking & Scanner Label
        </p>

        {/* Product Details Card */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 mb-6 text-left">
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">{barcodeProduct.category}</p>
          <p className="text-base font-bold text-slate-900 dark:text-slate-100">{barcodeProduct.name}</p>
          <div className="flex justify-between items-center text-xs text-slate-500 mt-2">
            <span>SKU: {barcodeProduct.id.toUpperCase()}</span>
            <span>Batch: {barcodeProduct.batchNumber}</span>
          </div>
        </div>

        {/* Barcode Graphic Visualization */}
        <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 flex flex-col items-center justify-center mb-6">
          {/* Simulated EAN Barcode */}
          <div className="flex items-end gap-1 h-20 mb-2">
            {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4].map((w, i) => (
              <div 
                key={i} 
                className={`bg-slate-900 dark:bg-slate-100 ${i % 2 === 0 ? 'opacity-100' : 'opacity-80'}`} 
                style={{ width: `${w * 2}px`, height: '100%' }}
              />
            ))}
          </div>
          <p className="font-mono text-sm font-bold text-slate-800 dark:text-slate-200 tracking-widest">
            {barcodeProduct.barcode}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              addToast('success', 'Print Job Sent', `Barcode label for ${barcodeProduct.name} sent to thermal printer.`);
              setBarcodeProduct(null);
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Printer className="w-4 h-4" /> Print Thermal Label
          </button>

          <button
            onClick={() => {
              addToast('info', 'Label Downloaded', `PNG label saved for ${barcodeProduct.name}.`);
              setBarcodeProduct(null);
            }}
            className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Download className="w-4 h-4" /> SVG / PNG
          </button>
        </div>
      </div>
    </div>
  );
}
