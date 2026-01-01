
import React, { useState } from 'react';
import { TOURNAMENTS, PLAYERS, TEAMS } from '../data';
import { Tournament, Player, Team } from '../types';

interface SearchViewProps {
  onClose: () => void;
  onSelectTournament: (t: Tournament) => void;
  onSelectPlayer: (p: Player) => void;
  onSelectTeam: (t: Team) => void;
  onAISearch: (query: string) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ 
  onClose, 
  onSelectTournament, 
  onSelectPlayer, 
  onSelectTeam,
  onAISearch
}) => {
  const [query, setQuery] = useState('');

  const filteredTournaments = TOURNAMENTS.filter(t => 
    t.host.toLowerCase().includes(query.toLowerCase()) || 
    t.year.toString().includes(query)
  );
  
  const filteredPlayers = PLAYERS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTeams = TEAMS.filter(t => 
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      onAISearch(query.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom duration-300 flex flex-col">
      <div className="p-4 flex items-center gap-3 border-b border-gray-200 dark:border-white/5">
        <button onClick={onClose} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            autoFocus
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar mundiales, jugadores..."
            className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full pl-10 pr-4 h-11 focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
        {query.trim() !== '' && (
          <button 
            onClick={() => onAISearch(query.trim())}
            className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined fill-1">auto_awesome</span>
              <div className="text-left">
                <p className="font-bold text-sm">Preguntar a la IA Histórica</p>
                <p className="text-[10px] opacity-80 uppercase tracking-wider font-bold">Búsqueda avanzada de estadísticas</p>
              </div>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        )}

        {query === '' ? (
          <div className="flex flex-col items-center justify-center h-full opacity-50">
            <span className="material-symbols-outlined text-6xl mb-2">sports_soccer</span>
            <p className="text-sm">Empieza a escribir para buscar</p>
          </div>
        ) : (
          <>
            {filteredTournaments.length > 0 && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Torneos Locales</h3>
                <div className="flex flex-col gap-2">
                  {filteredTournaments.map(t => (
                    <button 
                      key={t.id} 
                      onClick={() => onSelectTournament(t)}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-left transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">emoji_events</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{t.host} {t.year}</p>
                        <p className="text-xs text-gray-500">Campeón: {t.champion}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {filteredPlayers.length > 0 && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Jugadores Locales</h3>
                <div className="flex flex-col gap-2">
                  {filteredPlayers.map(p => (
                    <button 
                      key={p.id} 
                      onClick={() => onSelectPlayer(p)}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-left transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.team}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
            
            {filteredTournaments.length === 0 && filteredPlayers.length === 0 && (
              <div className="text-center py-10 opacity-50">
                <p className="text-sm">No hay coincidencias en la base de datos local.</p>
                <p className="text-xs mt-2">Prueba el botón "Preguntar a la IA" arriba.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchView;
