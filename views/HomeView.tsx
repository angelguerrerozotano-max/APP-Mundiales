
import React from 'react';
import { TOURNAMENTS, PLAYERS } from '../data';
import { Tournament, Player } from '../types';

interface HomeViewProps {
  onViewTournament: (t: Tournament) => void;
  onViewPlayer: (p: Player) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onViewTournament, onViewPlayer }) => {
  const featuredTournament = TOURNAMENTS[0];
  const featuredPlayer = PLAYERS[0];

  return (
    <div className="flex flex-col gap-6 p-4 animate-in fade-in duration-500">
      {/* Torneo Destacado */}
      <div 
        onClick={() => onViewTournament(featuredTournament)}
        className="relative w-full overflow-hidden rounded-xl shadow-lg bg-surface-dark group cursor-pointer h-[420px]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url(${featuredTournament.heroImageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        <div className="relative flex flex-col justify-end h-full p-6 z-10">
          <div className="mb-auto pt-2 flex justify-end">
            <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
              Torneo Destacado
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white leading-[0.9] mb-3 tracking-tighter uppercase">
            {featuredTournament.host}<br/><span className="text-primary">{featuredTournament.year}</span>
          </h1>
          <div className="flex flex-col gap-3 mb-6 border-l-4 border-primary pl-4">
            <p className="text-gray-200 text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-yellow-500">emoji_events</span>
              <span className="opacity-90">Campeón:</span> <span className="font-bold text-white">{featuredTournament.champion}</span>
            </p>
            <p className="text-gray-200 text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-white/80">sports_soccer</span>
              <span className="opacity-90">Goleador:</span> <span className="font-bold text-white">{featuredTournament.topScorer}</span>
            </p>
          </div>
          <button className="w-full bg-primary hover:bg-red-600 text-white font-bold h-12 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
            <span>Ver Torneo</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Jugador Legendario */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Jugador Legendario</h3>
          <button className="text-primary text-sm font-medium">Ver todos</button>
        </div>
        <div className="flex flex-row items-stretch justify-between gap-0 rounded-xl bg-white dark:bg-surface-dark shadow-md overflow-hidden border border-gray-100 dark:border-white/5">
          <div className="flex flex-[1.5] flex-col justify-between p-5 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-yellow-500 text-[18px] fill-1">star</span>
                <p className="text-primary text-[10px] font-bold uppercase tracking-wider">{featuredPlayer.nickname}</p>
              </div>
              <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight">{featuredPlayer.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">{featuredPlayer.description}</p>
            </div>
            <div className="flex gap-4 border-t border-gray-100 dark:border-white/10 pt-3">
              <div>
                <span className="block text-lg font-bold text-gray-900 dark:text-white">{featuredPlayer.matches}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Partidos</span>
              </div>
              <div>
                <span className="block text-lg font-bold text-gray-900 dark:text-white">{featuredPlayer.goals}</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Goles</span>
              </div>
            </div>
            <button 
              onClick={() => onViewPlayer(featuredPlayer)}
              className="flex w-fit items-center justify-center rounded-lg h-9 px-4 bg-gray-900 dark:bg-black text-white text-xs font-medium leading-normal mt-2"
            >
              Ver Perfil
            </button>
          </div>
          <div 
            className="w-2/5 bg-center bg-no-repeat bg-cover relative" 
            style={{ backgroundImage: `url(${featuredPlayer.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-surface-dark to-transparent w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Estadísticas Clave */}
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-1">Estadísticas Clave</h3>
        <div className="flex overflow-x-auto gap-3 pb-4 hide-scrollbar snap-x pl-1">
          <StatCard icon="sports_soccer" value="13" label="Goles en un torneo" sub="Just Fontaine '58" color="primary" />
          <StatCard icon="trophy" value="5" label="Títulos Mundiales" sub="Brasil" color="yellow-500" />
          <StatCard icon="groups" value="26" label="Partidos Jugados" sub="Lionel Messi" color="blue-500" />
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: string, value: string, label: string, sub: string, color: string }> = ({ icon, value, label, sub, color }) => (
  <div className="snap-start shrink-0 w-40 h-40 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 p-4 flex flex-col justify-between shadow-sm relative overflow-hidden group">
    <div className="absolute right-0 top-0 opacity-5 dark:opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
      <span className="material-symbols-outlined text-9xl">{icon}</span>
    </div>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10`} style={{ backgroundColor: `rgba(236, 19, 19, 0.1)` }}>
      <span className={`material-symbols-outlined text-primary`}>{icon}</span>
    </div>
    <div className="z-10">
      <p className="text-5xl font-bold text-gray-900 dark:text-white tracking-tighter group-hover:text-primary transition-colors">{value}</p>
      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}<br/><span className="text-primary">{sub}</span></p>
    </div>
  </div>
);

export default HomeView;
