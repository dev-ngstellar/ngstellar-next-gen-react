import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, UtensilsCrossed, Smartphone, CheckCircle2, Download } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const QRMenuGenerator = () => {
  const { setTableNumber, setCurrentView } = useApp();
  const [selectedTable, setSelectedTable] = useState('04');

  const simulatedUrl = `https://gourmetium.app/menu?table=${selectedTable}`;

  const handleSimulateScan = () => {
    setTableNumber(selectedTable);
    setCurrentView('menu');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-center">
      <div className="space-y-2">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Contactless Dine-In Solution</span>
        <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">Artisanal QR Menu Generator</h2>
        <p className="text-xs text-stone-500">Generate high-resolution QR codes for table ordering or simulate scanning.</p>
      </div>

      <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-2xl max-w-md mx-auto space-y-6">
        
        {/* Table Selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">Select Table Number</label>
          <select
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white font-bold text-center"
          >
            <option value="01">Table 01 (Patio)</option>
            <option value="04">Table 04 (Main Dining)</option>
            <option value="08">Table 08 (VIP Booth)</option>
            <option value="12">Table 12 (Terrace)</option>
          </select>
        </div>

        {/* QR Display Frame */}
        <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800 flex flex-col items-center justify-center border border-stone-200 dark:border-stone-700">
          <QRCodeSVG value={simulatedUrl} size={180} fgColor="#0F172A" bgColor="#FFFFFF" level="H" includeMargin={true} />
          <span className="text-xs font-mono font-bold text-amber-500 mt-4">SCAN TO ORDER — TABLE {selectedTable}</span>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleSimulateScan}
            className="w-full py-3.5 rounded-2xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" /> Simulate Scan & Order as Table {selectedTable}
          </button>
        </div>

      </div>
    </div>
  );
};
