
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  onSearchClick: () => void;
  onBack?: () => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick, onBack, title = "Historia Mundiales" }) => {
  return (
    <div className="sticky top-0 z-40 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-white/5 h-16">
      <div className="flex items-center gap-2">
        {onBack ? (
          <button onClick={onBack} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        ) : (
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">public</span>
          </div>
        )}
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex w-12 items-center justify-end">
        <button 
          onClick={onSearchClick}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
