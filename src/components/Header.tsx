import React from 'react';
import { ShieldCheck, Flame, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  currentScreen: 'discovery' | 'confirmation';
  onBackToDiscovery?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onBackToDiscovery }) => {
  return (
    <header id="app-header" className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentScreen === 'confirmation' && onBackToDiscovery && (
            <button
              id="back-nav-button"
              onClick={onBackToDiscovery}
              className="p-2 -ml-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Back to Gym Contracts"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-amber-500 flex items-center justify-center font-black text-slate-950 text-sm tracking-tight">
                MMA
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Deal Hub
              </h1>
            </div>
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Central & South SG • CBD Second-Hand Contracts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 rounded-full px-3 py-1 text-xs text-emerald-400 font-semibold shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Verified Deals</span>
        </div>
      </div>
    </header>
  );
};
