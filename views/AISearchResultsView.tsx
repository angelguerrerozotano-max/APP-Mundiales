
import React, { useState, useEffect } from 'react';
import { searchWorldCupData } from '../geminiService';
import { AISearchResponse } from '../types';
import AIResponse from '../components/AIResponse';

interface AISearchResultsViewProps {
  query: string;
}

const AISearchResultsView: React.FC<AISearchResultsViewProps> = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AISearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await searchWorldCupData(query);
        setData(result);
      } catch (err) {
        setError("Lo sentimos, no pudimos procesar tu búsqueda en este momento.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 gap-6 animate-pulse">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
          <span className="material-symbols-outlined text-4xl animate-spin">sports_soccer</span>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">Buscando en la historia...</h2>
          <p className="text-sm text-gray-500">Consultando fuentes oficiales y estadísticas mundiales.</p>
        </div>
        <div className="w-full max-w-xs space-y-3 mt-4">
          <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-200 dark:bg-white/5 rounded w-4/6 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center flex flex-col items-center gap-4">
        <span className="material-symbols-outlined text-6xl text-gray-300">error</span>
        <p className="text-gray-500 font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 pb-20">
      <div className="mb-6 px-2">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Resultados para</p>
        <h1 className="text-2xl font-black italic tracking-tighter">"{query}"</h1>
      </div>
      {data && <AIResponse data={data} />}
    </div>
  );
};

export default AISearchResultsView;
