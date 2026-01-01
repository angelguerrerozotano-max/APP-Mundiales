
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { view: AppView.HOME, icon: 'home', label: 'Inicio' },
    { view: AppView.TOURNAMENTS, icon: 'emoji_events', label: 'Torneos' },
    { view: AppView.TEAMS, icon: 'flag', label: 'Equipos' },
    { view: AppView.PLAYERS, icon: 'person', label: 'Jugadores' },
    { view: AppView.MOMENTS, icon: 'history_edu', label: 'Historia' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/90 dark:bg-[#1a0c0c]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full p-2 z-50 shadow-2xl flex justify-between items-center transition-all duration-300">
      {navItems.map((item) => (
        <button
          key={item.view}
          onClick={() => setView(item.view)}
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            currentView === item.view 
              ? 'w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 transform -translate-y-1'
              : 'w-14 text-gray-400 hover:text-primary dark:hover:text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
          {currentView !== item.view && (
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
