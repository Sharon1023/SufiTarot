import { useState, useCallback } from 'react';
import { HomePage } from './pages/HomePage';
import { CardListPage } from './pages/CardListPage';
import { CardDetailPage } from './pages/CardDetailPage';
import type { SuitId } from './data/cards';

type View =
  | { name: 'home' }
  | { name: 'list'; suitId: SuitId }
  | { name: 'detail'; cardId: string; suitId: SuitId };

export default function App() {
  const [view, setView] = useState<View>({ name: 'home' });

  const goHome = useCallback(() => setView({ name: 'home' }), []);
  const goList = useCallback((suitId: SuitId) => setView({ name: 'list', suitId }), []);
  const goDetail = useCallback((cardId: string, suitId: SuitId) => setView({ name: 'detail', cardId, suitId }), []);

  return (
    <div className="relative min-h-screen paper-texture">
      <div
        key={`${view.name}-${view.name === 'list' ? view.suitId : view.name === 'detail' ? view.cardId : ''}`}
        className="relative z-10 animate-fade-in"
      >
        {view.name === 'home' && <HomePage onNavigate={goList} />}

        {view.name === 'list' && (
          <CardListPage
            key={view.suitId}
            suitId={view.suitId}
            onSelect={(cardId) => goDetail(cardId, view.suitId)}
            onBack={goHome}
          />
        )}

        {view.name === 'detail' && (
          <CardDetailPage key={view.cardId} cardId={view.cardId} onBack={() => goList(view.suitId)} />
        )}
      </div>
    </div>
  );
}
