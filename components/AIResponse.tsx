
import React from 'react';
import { AISearchResponse } from '../types';

interface AIResponseProps {
  data: AISearchResponse;
}

const AIResponse: React.FC<AIResponseProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/5 leading-relaxed text-slate-700 dark:text-gray-300">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <span className="material-symbols-outlined fill-1">auto_awesome</span>
          <h3 className="text-sm font-bold uppercase tracking-widest">Respuesta de la IA</h3>
        </div>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {data.text.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 last:mb-0 whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {data.sources && data.sources.length > 0 && (
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2">Fuentes Consultadas</h4>
          <div className="flex flex-col gap-2">
            {data.sources.map((source, idx) => (
              source.web && (
                <a 
                  key={idx} 
                  href={source.web.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">link</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate text-slate-900 dark:text-white">{source.web.title || 'Sitio Web'}</p>
                    <p className="text-[10px] text-gray-500 truncate">{new URL(source.web.uri).hostname}</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-sm">open_in_new</span>
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIResponse;
