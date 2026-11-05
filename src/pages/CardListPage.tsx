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
        {/* suit banner with etymology */}
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-gold-500/15 bg-cream-50 p-6 animate-fade-in sm:p-7">
          <SufiOrnament size={120} className="pointer-events-none absolute -right-6 -top-6 opacity-[0.08]" color="#0A3A2F" />
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-emerald-800 font-serif text-3xl text-gold-400">
              {suit.symbol}
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-2xl font-semibold text-emerald-900">{suit.name}</h2>
              <p className="mt-1 text-sm text-emerald-800/70">{suit.description}</p>
              {suit.rootWord !== '—' && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gold-500/20 bg-cream-100 px-3 py-1 text-xs text-gold-700">
                    語源 {suit.rootWord}
                  </span>
                  <span className="rounded-full border border-emerald-700/20 bg-cream-100 px-3 py-1 text-xs text-emerald-700">
                    {suit.element}元素 · {suit.elementArabic}
                  </span>
                </div>
              )}
              {suit.rootWord !== '—' && (
                <p className="mt-3 border-l-2 border-gold-500/30 pl-3 text-xs italic leading-relaxed text-emerald-700/60">
                  {suit.rootMeaning}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* card grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cards.map((c, i) => (
            <button
              key={c.id}
              onClick={() => c.isMock && onSelect(c.id)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`group flex flex-col items-center gap-2 animate-fade-in-up ${
                c.isMock ? 'cursor-pointer' : 'cursor-default opacity-50'
              }`}
            >
              <div className="relative transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
                <CardArt suitId={suitId} name={c.name} number={c.number} size="md" />
                {c.isMock && (
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs text-cream-100">
                      查看牌義
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="font-serif text-sm text-emerald-900">{c.name}</p>
                {!c.isMock && <p className="text-[10px] text-emerald-600/40">資料待補</p>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
