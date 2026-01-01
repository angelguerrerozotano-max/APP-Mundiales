
import React from 'react';
import { Team } from '../types';

interface TeamProfileProps {
  team: Team;
  onBack: () => void;
}

const TeamProfile: React.FC<TeamProfileProps> = ({ team, onBack }) => {
  return (
    <div className="flex flex-col gap-6 pb-24 animate-in slide-in-from-right duration-500">
      <div className="relative flex flex-col items-center justify-center pt-8 pb-6 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="relative">
            <div className="bg-white dark:bg-[#392828] p-1 rounded-full shadow-lg">
              <div 
                className="bg-center bg-no-repeat bg-contain rounded-full h-32 w-32 border-4 border-background-light dark:border-background-dark bg-white" 
                style={{ backgroundImage: `url(${team.logoUrl})` }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md border-2 border-background-light dark:border-background-dark">
              {team.ranking}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-gray-900 dark:text-white text-[28px] font-bold leading-tight tracking-tight text-center">{team.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">public</span> {team.federation}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-2 gap-3">
          <TeamStat label="Participaciones" value={String(team.participations)} />
          <TeamStat label="Títulos" value={String(team.titles)} highlight />
          <TeamStat label="Finales" value={String(team.finals)} />
          <TeamStat label="Partidos" value={String(team.matches)} />
        </div>
      </div>

      <div className="px-4">
         <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span> Historia
         </h3>
         <div className="relative pl-6 border-l-2 border-primary/20 space-y-6">
            <div className="relative">
               <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40"></div>
               <div>
                  <p className="font-bold text-lg">2022 <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full ml-2">CHAMPION</span></p>
                  <p className="text-xs text-gray-500">Qatar</p>
               </div>
            </div>
            <div className="relative">
               <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-400"></div>
               <div>
                  <p className="font-bold text-lg">2014 <span className="text-xs bg-gray-200 text-black px-2 py-0.5 rounded-full ml-2">RUNNER-UP</span></p>
                  <p className="text-xs text-gray-500">Brasil</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const TeamStat: React.FC<{ label: string, value: string, highlight?: boolean }> = ({ label, value, highlight }) => (
  <div className={`flex flex-col gap-1 rounded-xl p-4 shadow-sm border ${highlight ? 'bg-primary/10 border-primary/20' : 'bg-white dark:bg-[#392828] border-gray-100 dark:border-transparent'}`}>
    <p className={`text-[10px] font-bold uppercase tracking-wider ${highlight ? 'text-primary' : 'text-gray-400'}`}>{label}</p>
    <p className={`text-2xl font-black ${highlight ? 'text-primary' : ''}`}>{value}</p>
  </div>
);

export default TeamProfile;
