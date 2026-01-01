
export enum AppView {
  HOME = 'home',
  TOURNAMENTS = 'tournaments',
  TEAMS = 'teams',
  PLAYERS = 'players',
  MOMENTS = 'moments',
  SEARCH = 'search',
  TOURNAMENT_DETAIL = 'tournament_detail',
  TEAM_PROFILE = 'team_profile',
  PLAYER_PROFILE = 'player_profile',
  AI_SEARCH_RESULTS = 'ai_search_results'
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface AISearchResponse {
  text: string;
  sources: GroundingChunk[];
}

export interface Tournament {
  id: string;
  year: number;
  host: string;
  champion: string;
  runnerUp: string;
  topScorer: string;
  goals: number;
  mascotUrl?: string;
  heroImageUrl: string;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  matches: number;
  goals: number;
  assists: number;
  tournaments: number;
  nickname?: string;
  imageUrl: string;
  description: string;
}

export interface Team {
  id: string;
  name: string;
  federation: string;
  titles: number;
  participations: number;
  finals: number;
  matches: number;
  logoUrl: string;
  ranking: string;
}

export interface Moment {
  id: string;
  title: string;
  description: string;
  year: string;
  location: string;
  imageUrl: string;
  readTime: string;
  tag: string;
}
