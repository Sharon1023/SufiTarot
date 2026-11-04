import { useState } from 'react';
import {
  RotateCw,
  BookOpen,
  Compass,
  Heart,
  Briefcase,
  Coins,
  Users,
  Moon,
  Sparkles,
} from 'lucide-react';
import { CARDS, SUITS } from '../data/cards';
import type { CardData, Orientation, LifeArea } from '../data/cards';
import { Header } from '../components/Header';
import { CardArt } from '../components/CardArt';
import { SufiOrnament } from '../components/SufiOrnament';

interface CardDetailPageProps {
  cardId: string;
  onBack: () => void;
}

const lifeAreas: { id: LifeArea; icon: React.ComponentType<{ className?: string }>; color: string }[] = [
  { id: '感情', icon: Heart, color: 'rose' },
  { id: '事業', icon: Briefcase, color: 'gold' },
  { id: '財務', icon: Coins, color: 'emerald' },
  { id: '親情', icon: Users, color: 'sky' },
  { id: '健康', icon: Moon, color: 'violet' },
];

const areaStyles: Record<string, { border: string; bg: string; text: string; activeBorder: string; activeBg: string; activeText: string }> = {
  rose: {
    border: 'border-rose-400/25', bg: 'bg-rose-500/5', text: 'text-rose-300',
    activeBorder: 'border-rose-400/70', activeBg: 'bg-rose-500/15', activeText: 'text-rose-200',
  },
  gold: {
    border: 'border-gold-400/25', bg: 'bg-gold-500/5', text: 'text-gold-300',
    activeBorder: 'border-gold-400/70', activeBg: 'bg-gold-500/15', activeText: 'text-gold-200',
  },
  emerald: {
    border: 'border-emerald-400/25', bg: 'bg-emerald-500/5', text: 'text-emerald-300',
    activeBorder: 'border-emerald-400/70', activeBg: 'bg-emerald-500/15', activeText: 'text-emerald-200',
  },
  sky: {
    border: 'border-sky-400/25', bg: 'bg-sky-500/5', text: 'text-sky-300',
    activeBorder: 'border-sky-400/70', activeBg: 'bg-sky-500/15', activeText: 'text-sky-200',
  },
  violet: {
    border: 'border-violet-400/25', bg: 'bg-violet-500/5', text: 'text-violet-300',
    activeBorder: 'border-violet-400/70', activeBg: 'bg-violet-500/15', activeText: 'text-violet-200',
  },
};

export function CardDetailPage({ cardId, onBack }: CardDetailPageProps) {
  const [orientation, setOrientation] = useState<Orientation>('upright');
  const [activeArea, setActiveArea] = useState<LifeArea | null>(null);

  const card: CardData | undefined = CARDS.find((c) => c.id === cardId);

  if (!card) {
    return (
      <div className="min-h-screen">
        <Header title="牌義資料" onBack={onBack} />
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <SufiOrnament size={100} className="mx-auto opacity-30" />
          <p className="mt-6 font-serif text-lg text-gold-100">此牌的資料尚在編寫中</p>
          <p className="mt-2 text-sm text-midnight-200/60">
            導師正為這張牌撰寫蘇菲牌義與反思引導，請日後再來。
          </p>
          <button
            onClick={onBack}
            className="mt-6 rounded-full border border-gold-400/30 px-5 py-2 text-sm text-gold-200 transition-colors hover:bg-gold-500/10"
          >
            返回列表
          </button>
        </div>
      </div>
    );
  }

  const suit = SUITS.find((s) => s.id === card.suitId)!;
  const meaning = orientation === 'upright' ? card.upright : card.reversed;
  const isReversed = orientation === 'reversed';

  const guidance = activeArea ? card.guidance[activeArea][orientation] : null;

  return (
    <div className="min-h-screen">
      <Header
        title={`${card.name} · ${card.sufiName}`}
        subtitle={`${suit.name} · 第 ${card.number} 張`}
        onBack={onBack}
      />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        {/* top: card art + toggle */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8 animate-fade-in-up">
          {/* card art with glow */}
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute inset-0 -m-4 rounded-3xl bg-gold-400/10 blur-2xl animate-pulse-glow" />
            <div className="relative perspective">
              <CardArt
                suitId={card.suitId}
                name={card.name}
                number={card.number}
                size="lg"
                reversed={isReversed}
              />
            </div>
          </div>

          {/* toggle + summary */}
          <div className="flex w-full flex-1 flex-col gap-5">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gold-100 sm:text-3xl">{card.name}</h2>
              <p className="mt-1 font-serif text-sm text-gold-300/80">{card.sufiName}</p>
            </div>

            {/* orientation toggle */}
            <div className="inline-flex w-fit rounded-full border border-gold-400/20 bg-midnight-800/50 p-1">
              <button
                onClick={() => setOrientation('upright')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  orientation === 'upright'
                    ? 'bg-gold-gradient text-midnight-900 shadow-lg'
                    : 'text-midnight-100/60 hover:text-gold-200'
                }`}
              >
                <Compass className="h-4 w-4" />
                正位
              </button>
              <button
                onClick={() => setOrientation('reversed')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  orientation === 'reversed'
                    ? 'bg-gold-gradient text-midnight-900 shadow-lg'
                    : 'text-midnight-100/60 hover:text-gold-200'
                }`}
              >
                <RotateCw className="h-4 w-4" />
                逆位
              </button>
            </div>

            {/* keywords */}
            <div className="flex flex-wrap gap-2">
              {meaning.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-gold-400/20 bg-midnight-800/40 px-3 py-1 text-xs text-gold-200/80"
                >
                  {k}
                </span>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-midnight-100/70">
              {suit.name} · {suit.element}元素
              {isReversed ? ' · 逆位能量流轉中' : ' · 正位之光顯現'}
            </p>
          </div>
        </div>

        {/* book meaning section */}
        <section
          key={orientation}
          className="mt-8 animate-fade-in-up rounded-3xl border border-gold-400/15 bg-midnight-800/30 p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold-300" />
            <h3 className="font-serif text-lg font-semibold text-gold-100">牌義寶典</h3>
            <span className={`ml-auto rounded-full px-3 py-0.5 text-xs ${isReversed ? 'text-rose-300/80' : 'text-emerald-300/80'}`}>
              {isReversed ? '逆位' : '正位'}
            </span>
          </div>

          {/* core sufi philosophy */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <SufiOrnament size={20} className="opacity-70" />
              <h4 className="font-serif text-base font-medium text-gold-200">核心蘇菲哲學</h4>
            </div>
            <p className="border-l-2 border-gold-400/40 pl-4 text-sm leading-loose text-midnight-50/85">
              {meaning.philosophy}
            </p>
          </div>

          {/* divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
            <Sparkles className="h-4 w-4 text-gold-400/50" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          </div>

          {/* book definition */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gold-300/80" />
              <h4 className="font-serif text-base font-medium text-gold-200">書本定義</h4>
            </div>
            <p className="text-sm leading-loose text-midnight-50/80">
              {meaning.definition}
            </p>
          </div>
        </section>

        {/* interactive guided questions */}
        <section className="mt-8">
          <div className="mb-5 flex items-center gap-2">
            <Compass className="h-5 w-5 text-gold-300" />
            <h3 className="font-serif text-lg font-semibold text-gold-100">一對一導師引導</h3>
          </div>
          <p className="mb-5 text-sm text-midnight-100/60">
            選擇一個生命領域，導師將根據〈{card.name}〉的{isReversed ? '逆位' : '正位'}能量，為你展開一段深度反思。
          </p>

          {/* category buttons */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {lifeAreas.map((area) => {
              const s = areaStyles[area.color];
              const Icon = area.icon;
              const isActive = activeArea === area.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  className={`group flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-300 animate-fade-in-scale ${
                    isActive
                      ? `${s.activeBorder} ${s.activeBg} ${s.activeText} -translate-y-1 shadow-lg`
                      : `${s.border} ${s.bg} ${s.text} hover:-translate-y-0.5 hover:border-gold-400/40`
                  }`}
                >
                  <Icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span className="font-serif text-sm font-medium">{area.id}</span>
                </button>
              );
            })}
          </div>

          {/* guidance panel */}
          {guidance && activeArea && (
            <div
              key={`${activeArea}-${orientation}`}
              className="mt-6 animate-slide-in-right overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-midnight-700/50 via-midnight-800/50 to-midnight-900/50 p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 opacity-10">
                <SufiOrnament size={180} />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = lifeAreas.find((a) => a.id === activeArea)!.icon;
                    const s = areaStyles[lifeAreas.find((a) => a.id === activeArea)!.color];
                    return (
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${s.activeBorder} ${s.activeBg} ${s.activeText}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    );
                  })()}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-300/60">導師引導</p>
                    <h4 className="font-serif text-lg font-semibold text-gold-100">
                      〈{card.name}〉· {activeArea}
                    </h4>
                  </div>
                  <span className={`ml-auto rounded-full px-3 py-1 text-xs ${isReversed ? 'text-rose-300/80' : 'text-emerald-300/80'}`}>
                    {isReversed ? '逆位' : '正位'}
                  </span>
                </div>

                <div className="my-1 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

                <p className="font-serif text-[15px] leading-loose text-midnight-50/90">
                  {guidance}
                </p>

                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-gold-400/15 bg-midnight-900/40 p-4">
                  <Sparkles className="h-4 w-4 shrink-0 text-gold-400/70" />
                  <p className="text-xs leading-relaxed text-midnight-100/60">
                    靜下心，將這段引導讀三遍。第一遍以眼讀，第二遍以心讀，第三遍讓它在你的呼吸中沉降——答案會在你沉默時浮現。
                  </p>
                </div>
              </div>
            </div>
          )}

          {!activeArea && (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-gold-400/15 bg-midnight-800/20 p-10 text-center">
              <SufiOrnament size={60} className="opacity-30" />
              <p className="text-sm text-midnight-200/50">
                選擇上方一個生命領域，開始你的反思之旅
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
