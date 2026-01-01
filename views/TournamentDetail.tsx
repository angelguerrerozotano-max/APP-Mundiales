
import React from 'react';
import { Tournament } from '../types';

interface TournamentDetailProps {
  tournament: Tournament;
}

const TournamentDetail: React.FC<TournamentDetailProps> = ({ tournament }) => {
  return (
    <div className="flex flex-col gap-4 animate-in slide-in-from-right duration-500">
      <div className="px-4 pt-6 pb-2">
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-[#b91c1c] to-[#7f1d1d] shadow-lg shadow-primary/20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10 p-6 flex flex-col items-center text-center">
            <div className="mb-4 relative">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl overflow-hidden">
                <img className="w-full h-full object-cover" src={tournament.mascotUrl} alt="Mascot" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                '{String(tournament.year).slice(-2)}
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">{tournament.host} {tournament.year}</h1>
            <p className="text-white/80 text-xs font-medium mb-6">13 June – 11 July</p>
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-1 bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                <p className="text-[9px] uppercase tracking-wider text-white/60 font-bold mb-1">Champion</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-bold text-xs">{tournament.champion}</span>
                </div>
              </div>
              <div className="flex-1 bg-black/20 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                <p className="text-[9px] uppercase tracking-wider text-white/60 font-bold mb-1">Runner-up</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-bold text-xs">{tournament.runnerUp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-gray-200 dark:border-white/5 shadow-sm">
          <h3 className="text-sm font-bold mb-4">Final Match</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-1 flex-1">
               <div className="size-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xl">🇮🇹</div>
               <span className="font-bold text-xs">{tournament.champion}</span>
            </div>
            <div className="flex flex-col items-center px-4 bg-background-light dark:bg-black/20 rounded-lg py-2 border border-gray-200 dark:border-white/5">
              <span className="text-2xl font-extrabold text-primary">3 - 1</span>
              <span className="text-[9px] text-gray-500 font-medium uppercase">Final</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1">
               <div className="size-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xl">🇩🇪</div>
               <span className="font-bold text-xs text-gray-500">{tournament.runnerUp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 flex flex-col gap-4">
         <h3 className="font-bold text-base mt-2">Estadísticas Clave</h3>
         <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Goleador</p>
                <p className="font-bold text-sm">{tournament.topScorer}</p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Goles Totales</p>
                <p className="font-bold text-sm">{tournament.goals}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
