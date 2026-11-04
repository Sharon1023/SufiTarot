import { SUITS, CARDS } from '../data/cards';
import type { SuitId, CardData } from '../data/cards';
import { Header } from '../components/Header';
import { CardArt } from '../components/CardArt';
import { SufiOrnament } from '../components/SufiOrnament';

interface CardListPageProps {
  suitId: SuitId;
  onSelect: (cardId: string) => void;
  onBack: () => void;
}

// Build a display list: real mock cards first, then numbered placeholders up to suit.count.
function buildCardList(suitId: SuitId, count: number): { id: string; name: string; number: string; isMock: boolean }[] {
  const real = CARDS.filter((c) => c.suitId === suitId);
  const items = real.map((c: CardData) => ({ id: c.id, name: c.name, number: c.number, isMock: true }));
  const filled = items.length;
  for (let i = filled; i < count; i++) {
    const num = suitId === 'major' ? String(i + 1) : `${i + 1}`;
    items.push({ id: `placeholder-${suitId}-${i}`, name: `第 ${num} 張`, number: num, isMock: false });
  }
  return items;
}

export function CardListPage({ suitId, onSelect, onBack }: CardListPageProps) {
  const suit = SUITS.find((s) => s.id === suitId)!;
  const cards = buildCardList(suitId, suit.count);

  return (
    <div className="min-h-screen">
      <Header title={`${suit.name} · ${suit.subtitle}`} onBack={onBack} />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        {/* suit banner */}
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-gold-400/15 bg-midnight-800/30 p-6 sm:p-8 animate-fade-in">
          <SufiOrnament size={140} className="pointer-events-none absolute -right-8 -top-8 opacity-15" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold-400/30 bg-midnight-900/50 font-serif text-3xl text-gold-300">
              {suit.symbol}
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-gold-100">{suit.name}</h2>
              <p className="mt-1 text-sm text-midnight-100/70">{suit.description}</p>
            </div>
          </div>
        </div>

        {/* card grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cards.map((c, i) => (
            <button
              key={c.id}
              onClick={() => c.isMock && onSelect(c.id)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`group flex flex-col items-center gap-2 animate-fade-in-up ${
                c.isMock ? 'cursor-pointer' : 'cursor-default opacity-60'
              }`}
            >
              <div className="relative transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">
                <CardArt suitId={suitId} name={c.name} number={c.number} size="md" />
                {c.isMock && (
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-gold-400/40 bg-midnight-900/80 px-3 py-1 text-xs text-gold-200">
                      查看牌義
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="font-serif text-sm text-gold-100">{c.name}</p>
                {!c.isMock && (
                  <p className="text-[10px] text-midnight-200/50">資料待補</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
