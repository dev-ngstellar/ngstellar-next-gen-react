import React from 'react';
import { Modal } from './Modal';
import { QrCode, ShieldCheck, Download, Share2, Calendar, User, Car } from 'lucide-react';
import { SOCIETY_INFO } from '../../data/mockData';

export const QRPassModal = ({ isOpen, onClose, passData }) => {
  if (!passData) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Security Gate QR Pass" maxWidth="max-w-md">
      <div className="flex flex-col items-center text-center space-y-5">
        
        {/* Pass Header */}
        <div className="w-full p-4 rounded-2xl theme-accent-light-bg border border-slate-200 dark:border-slate-800">
          <span className="text-[10px] font-extrabold uppercase tracking-widest theme-accent-text block">
            Official Gate Pass
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{SOCIETY_INFO.name}</h3>
        </div>

        {/* QR Code SVG Simulation */}
        <div className="p-6 bg-white rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 shadow-xl flex flex-col items-center">
          <div className="w-48 h-48 bg-slate-950 p-4 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <QrCode className="w-full h-full text-white" />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent pointer-events-none" />
          </div>
          <span className="mt-3 text-xs font-mono font-bold text-slate-700">
            PASS ID: {passData.qrCode || passData.id || 'QR-8901-A402'}
          </span>
        </div>

        {/* Visitor / Host Information */}
        <div className="w-full text-left bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl space-y-2 text-xs border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span className="text-slate-400">Visitor Name</span>
            <strong className="text-slate-900 dark:text-white">{passData.visitorName || passData.name || 'Guest'}</strong>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
            <span className="text-slate-400">Host Apartment</span>
            <strong className="text-slate-900 dark:text-white">{passData.hostApartment || passData.apartment || 'A-402'}</strong>
          </div>
          {passData.vehicleNo && (
            <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="text-slate-400">Vehicle Registered</span>
              <strong className="text-slate-900 dark:text-white">{passData.vehicleNo}</strong>
            </div>
          )}
          <div className="flex justify-between py-1">
            <span className="text-slate-400">Gate Status</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600">
              Verified Active
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => alert("QR Pass downloaded to device.")}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl theme-accent-bg text-white font-bold text-xs shadow-lg hover:opacity-95 transition"
          >
            <Download className="w-4 h-4" />
            Save to Wallet
          </button>
          <button
            onClick={() => alert("Pass link copied to clipboard.")}
            className="flex items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </Modal>
  );
};
