
import React, { useState } from 'react';
import { MOMENTS } from '../data';
import { Moment } from '../types';

interface MomentsViewProps {
  onBack: () => void;
}

const MomentsView: React.FC<MomentsViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Todos');
  const tabs = ['Todos', 'Era Clásica', 'Era Moderna', 'Milagros'];

  const filteredMoments = activeTab === 'Todos' 
    ? MOMENTS 
    : MOMENTS.filter(m => m.tag === activeTab);

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      <div className="sticky top-[64px] z-30 bg-background-light dark:bg-background-dark py-4 px-4 border-b border-gray-100 dark:border-white/5">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-9 shrink-0 px-5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 flex flex-col gap-6">
        {filteredMoments.map(moment => (
          <article key={moment.id} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url(${moment.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-md bg-primary/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                  {moment.year}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold leading-tight mb-2">{moment.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                {moment.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-primary text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                  <span>{moment.readTime}</span>
                </div>
                <button className="flex items-center gap-1 text-primary text-xs font-bold">
                  Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MomentsView;
