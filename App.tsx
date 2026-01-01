
import React, { useState, useEffect } from 'react';
import { AppView, Tournament, Team, Player } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomeView from './views/HomeView';
import TournamentDetail from './views/TournamentDetail';
import TeamProfile from './views/TeamProfile';
import PlayerProfile from './views/PlayerProfile';
import MomentsView from './views/MomentsView';
import SearchView from './views/SearchView';
import AISearchResultsView from './views/AISearchResultsView';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [history, setHistory] = useState<AppView[]>([]);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [aiQuery, setAiQuery] = useState<string>("");

  const navigateTo = (newView: AppView) => {
    setHistory(prev => [...prev, view]);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setView(prev);
    } else {
      setView(AppView.HOME);
    }
  };

  const renderView = () => {
    switch (view) {
      case AppView.HOME:
        return (
          <HomeView 
            onViewTournament={(t) => { setSelectedTournament(t); navigateTo(AppView.TOURNAMENT_DETAIL); }}
            onViewPlayer={(p) => { setSelectedPlayer(p); navigateTo(AppView.PLAYER_PROFILE); }}
          />
        );
      case AppView.TOURNAMENTS:
      case AppView.TOURNAMENT_DETAIL:
        return selectedTournament ? (
          <TournamentDetail tournament={selectedTournament} />
        ) : <HomeView onViewTournament={(t) => { setSelectedTournament(t); navigateTo(AppView.TOURNAMENT_DETAIL); }} />;
      
      case AppView.TEAM_PROFILE:
        return selectedTeam ? (
          <TeamProfile team={selectedTeam} onBack={handleBack} />
        ) : null;

      case AppView.PLAYER_PROFILE:
        return selectedPlayer ? (
          <PlayerProfile player={selectedPlayer} onBack={handleBack} />
        ) : null;

      case AppView.MOMENTS:
        return <MomentsView onBack={handleBack} />;

      case AppView.SEARCH:
        return (
          <SearchView 
            onClose={handleBack}
            onSelectTournament={(t) => { setSelectedTournament(t); navigateTo(AppView.TOURNAMENT_DETAIL); }}
            onSelectPlayer={(p) => { setSelectedPlayer(p); navigateTo(AppView.PLAYER_PROFILE); }}
            onSelectTeam={(t) => { setSelectedTeam(t); navigateTo(AppView.TEAM_PROFILE); }}
            onAISearch={(query) => { setAiQuery(query); navigateTo(AppView.AI_SEARCH_RESULTS); }}
          />
        );
      
      case AppView.AI_SEARCH_RESULTS:
        return <AISearchResultsView query={aiQuery} />;
      
      default:
        return <HomeView onViewTournament={(t) => { setSelectedTournament(t); navigateTo(AppView.TOURNAMENT_DETAIL); }} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl relative overflow-x-hidden">
      {view !== AppView.SEARCH && (
        <Header 
          onSearchClick={() => navigateTo(AppView.SEARCH)} 
          onBack={history.length > 0 ? handleBack : undefined}
          title={view === AppView.HOME ? "Historia Mundiales" : (view === AppView.AI_SEARCH_RESULTS ? "Motor de Búsqueda" : "")}
        />
      )}
      
      <main className="flex-1 pb-24">
        {renderView()}
      </main>

      {view !== AppView.SEARCH && (
        <Navigation currentView={view} setView={(v) => {
          if (v !== view) {
            setHistory([]);
            setView(v);
          }
        }} />
      )}
    </div>
  );
};

export default App;
