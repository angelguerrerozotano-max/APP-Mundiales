
import React, { useState, useEffect } from 'react';
import { Player } from '../types';
import { getAIFact } from '../geminiService';

interface PlayerProfileProps {
  player: Player;
  onBack: () => void;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ player, onBack }) => {
  const [aiFact, setAiFact] = useState<string | null>(null);
  const [isLoadingFact, setIsLoadingFact] = useState(false);

  const fetchFact = async () => {
    setIsLoadingFact(true);
    const fact = await getAIFact(`Historia y logros clave de ${player.name} en la Copa del Mundo`);
    setAiFact(fact);
    setIsLoadingFact(false);
  };

  useEffect(() => {
    fetchFact();
  }, [player.id]);

  return (
    <div className="flex flex-col w-full animate-in slide-in-from-right duration-500">
      <section className="relative flex flex-col items-center pt-6 pb-8 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-b-[3rem] pointer-events-none"></div>
        <div className="relative z-10 mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary via-orange-500 to-primary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div 
            className="relative w-40 h-56 rounded-xl bg-cover bg-center shadow-2xl border-2 border-white/10 overflow-hidden" 
            style={{ backgroundImage: `url(${player.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="text-center space-y-1 relative z-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">{player.name}</h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-gray-400 font-medium">
            <span className="flex items-center gap-1 bg-slate-200 dark:bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold">
              <span className="material-symbols-outlined text-sm fill-current">flag</span> {player.team}
            </span>
            {player.nickname && (
              <span className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full text-[10px] text-primary uppercase font-bold">
                {player.nickname}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <span className="material-symbols-outlined text-4xl">verified</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Perspectiva Histórica (IA)</h3>
          </div>
          {isLoadingFact ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-4/6"></div>
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300 italic">
              "{aiFact || player.description}"
            </p>
          )}
          <div className="mt-3 pt-3 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Grounding by Google Search</span>
            <span className="material-symbols-outlined text-primary text-sm">search</span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 px-2">
          <span className="material-symbols-outlined text-primary">bar_chart</span>
          Récords Clave
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Partidos" value={String(player.matches)} sub="Récord histórico" />
          <StatCard label="Goles" value={String(player.goals)} sub="Goles totales" />
          <StatCard label="Asistencias" value={String(player.assists)} sub="Máxima visión" />
          <StatCard label="Mundiales" value={String(player.tournaments)} sub="Participaciones" />
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ label: string, value: string, sub: string }> = ({ label, value, sub }) => (
  <div className="bg-white dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm flex flex-col gap-1">
    <p className="text-slate-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wide">{label}</p>
    <p className="text-3xl font-extrabold text-primary tracking-tight">{value}</p>
    <p className="text-[9px] text-slate-400 dark:text-gray-500 font-medium">{sub}</p>
  </div>
);

export default PlayerProfile;
