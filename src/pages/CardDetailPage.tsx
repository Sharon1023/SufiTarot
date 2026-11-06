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
  Sun,
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
    border: 'border-rose-400/20', bg: 'bg-velvet-200/30', text: 'text-rose-300/70',
    activeBorder: 'border-rose-400/50', activeBg: 'bg-rose-950/40', activeText: 'text-rose-300',
  },
  gold: {
    border: 'border-gold-500/20', bg: 'bg-velvet-200/30', text: 'text-gold-400/70',
    activeBorder: 'border-gold-500/50', activeBg: 'bg-gold-900/30', activeText: 'text-gold-300',
  },
  emerald: {
    border: 'border-emerald-500/20', bg: 'bg-velvet-200/30', text: 'text-emerald-300/70',
    activeBorder: 'border-emerald-400/50', activeBg: 'bg-emerald-950/40', activeText: 'text-emerald-300',
  },
  sky: {
    border: 'border-sky-400/20', bg: 'bg-velvet-200/30', text: 'text-sky-300/70',
    activeBorder: 'border-sky-400/50', activeBg: 'bg-sky-950/40', activeText: 'text-sky-300',
  },
  violet: {
    border: 'border-violet-400/20', bg: 'bg-velvet-200/30', text: 'text-violet-300/70',
    activeBorder: 'border-violet-400/50', activeBg: 'bg-violet-950/40', activeText: 'text-violet-300',
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
          <SufiOrnament size={100} className="mx-auto opacity-20" color="#D4AF37" />
          <p className="mt-6 font-serif text-lg text-cream-100">此牌的資料尚在編寫中</p>
          <p className="mt-2 text-sm text-sage-300/60">導師正為這張牌撰寫蘇菲牌義與反思引導，請日後再來。</p>
          <button
            onClick={onBack}
            className="mt-6 rounded-full border border-gold-500/25 bg-velvet-200/40 px-5 py-2 text-sm text-gold-300 transition-colors hover:bg-velvet-100/40"
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
        {/* card art + toggle */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8 animate-fade-in-up">
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute inset-0 -m-3 rounded-2xl bg-gold-500/10 blur-2xl animate-pulse-soft" />
            <div className="relative perspective">
              <CardArt suitId={card.suitId} name={card.name} number={card.number} size="lg" reversed={isReversed} />
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-5">
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream-100 text-illuminated sm:text-3xl">{card.name}</h2>
              <p className="mt-1 font-serif text-sm italic text-gold-400/80">{card.sufiName}</p>
            </div>

            {/* orientation toggle */}
            <div className="inline-flex w-fit rounded-full border border-gold-500/20 bg-velvet-200/40 p-1">
              <button
                onClick={() => setOrientation('upright')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  orientation === 'upright'
                    ? 'bg-midnight-200/80 text-gold-300 shadow-md'
                    : 'text-sage-300/60 hover:text-cream-100'
                }`}
              >
                <Compass className="h-4 w-4" />
                正位
              </button>
              <button
                onClick={() => setOrientation('reversed')}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  orientation === 'reversed'
                    ? 'bg-midnight-200/80 text-gold-300 shadow-md'
                    : 'text-sage-300/60 hover:text-cream-100'
                }`}
              >
                <RotateCw className="h-4 w-4" />
                逆位
              </button>
            </div>

            {/* keywords */}
            <div className="flex flex-wrap gap-2">
              {meaning.keywords.map((k) => (
                <span key={k} className="rounded-full border border-gold-500/15 bg-velvet-200/30 px-3 py-1 text-xs text-sage-100/80">
                  {k}
                </span>
              ))}
            </div>

            <p className="text-sm text-sage-300/60">
              {suit.name} · {suit.element}元素 · {suit.elementArabic}
              {isReversed ? ' · 逆位能量流轉' : ' · 正位之光顯現'}
            </p>
          </div>
        </div>

        {/* book meaning */}
        <section
          key={orientation}
          className="mt-8 animate-fade-in-up rounded-2xl border border-gold-500/15 glass-panel p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold-500" />
            <h3 className="font-serif text-lg font-semibold text-cream-100 text-illuminated">牌義寶典</h3>
            <span className={`ml-auto rounded-full px-3 py-0.5 text-xs ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
              {isReversed ? '逆位' : '正位'}
            </span>
          </div>

          {/* philosophy */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <SufiOrnament size={18} className="opacity-60" color="#D4AF37" />
              <h4 className="font-serif text-base font-medium text-cream-100">核心蘇菲哲學</h4>
            </div>
            <p className="border-l-2 border-gold-500/40 pl-4 text-sm leading-loose text-sage-100/85">
              {meaning.philosophy}
            </p>
          </div>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 gold-rule opacity-30" />
            <Sparkles className="h-4 w-4 text-gold-500/60" />
            <div className="h-px flex-1 gold-rule opacity-30" />
          </div>

          {/* definition */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gold-500/80" />
              <h4 className="font-serif text-base font-medium text-cream-100">書本定義</h4>
            </div>
            <p className="text-sm leading-loose text-sage-100/80">{meaning.definition}</p>
          </div>
        </section>

        {/* guided mentorship */}
        <section className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Compass className="h-5 w-5 text-gold-500" />
            <h3 className="font-serif text-lg font-semibold text-cream-100 text-illuminated">一對一導師引導</h3>
          </div>
          <p className="mb-5 text-sm text-sage-300/60">
            選擇一個生命領域，導師將根據〈{card.name}〉的{isReversed ? '逆位' : '正位'}能量，為你展開一段深度反思。
          </p>

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
                      ? `${s.activeBorder} ${s.activeBg} ${s.activeText} -translate-y-1 shadow-md`
                      : `${s.border} ${s.bg} ${s.text} hover:-translate-y-0.5 hover:border-gold-500/35`
                  }`}
                >
                  <Icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span className="font-serif text-sm font-medium">{area.id}</span>
                </button>
              );
            })}
          </div>

          {guidance && activeArea && (
            <div
              key={`${activeArea}-${orientation}`}
              className="mt-6 animate-slide-in-right overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-br from-velvet-200/50 to-midnight-200/50 p-6 sm:p-8"
            >
              <SufiOrnament size={160} className="pointer-events-none absolute -right-8 -top-8 opacity-[0.08]" color="#D4AF37" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const areaInfo = lifeAreas.find((a) => a.id === activeArea)!;
                    const s = areaStyles[areaInfo.color];
                    const Icon = areaInfo.icon;
                    return (
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${s.activeBorder} ${s.activeBg} ${s.activeText}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    );
                  })()}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500/50">導師引導</p>
                    <h4 className="font-serif text-lg font-semibold text-cream-100">〈{card.name}〉· {activeArea}</h4>
                  </div>
                  <span className={`ml-auto rounded-full px-3 py-1 text-xs ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
                    {isReversed ? '逆位' : '正位'}
                  </span>
                </div>

                <div className="my-1 h-px gold-rule opacity-25" />

                <p className="font-serif text-[15px] leading-loose text-cream-100/90">{guidance}</p>

                <div className="mt-2 flex items-center gap-2 rounded-xl border border-gold-500/15 bg-midnight-200/40 p-4">
                  <Sparkles className="h-4 w-4 shrink-0 text-gold-500/80" />
                  <p className="text-xs leading-relaxed text-sage-300/60">
                    靜下心，將這段引導讀三遍。第一遍以眼讀，第二遍以心讀，第三遍讓它在你的呼吸中沉降——答案會在你沉默時浮現。
                  </p>
                </div>
              </div>
            </div>
          )}

          {!activeArea && (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gold-500/15 bg-velvet-200/30 p-10 text-center">
              <SufiOrnament size={60} className="opacity-20" color="#D4AF37" />
              <p className="text-sm text-sage-300/50">選擇上方一個生命領域，開始你的反思之旅</p>
            </div>
          )}
        </section>

        {/* daily meditation */}
        {card.meditation && (
          <section className="mt-8 animate-fade-in-up rounded-2xl border border-gold-500/15 glass-panel p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Sun className="h-5 w-5 text-gold-500" />
              <h3 className="font-serif text-lg font-semibold text-cream-100 text-illuminated">每日冥想與肯定句</h3>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 font-serif text-base font-medium text-cream-100">心靈反思問題</h4>
              <ul className="flex flex-col gap-3">
                {card.meditation.contemplations.map((q, i) => (
                  <li
                    key={i}
                    style={{ animationDelay: `${i * 80}ms` }}
                    className="flex items-start gap-3 animate-fade-in-up rounded-xl border border-gold-500/10 bg-midnight-200/40 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/25 font-serif text-xs text-gold-400">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-sage-100/85">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 gold-rule opacity-30" />
              <Sparkles className="h-4 w-4 text-gold-500/60" />
              <div className="h-px flex-1 gold-rule opacity-30" />
            </div>

            <div className="relative overflow-hidden rounded-xl border border-gold-500/25 bg-gradient-to-br from-midnight-200/60 to-midnight-300/60 p-5">
              <SufiOrnament size={80} className="pointer-events-none absolute -right-3 -top-3 opacity-15" color="#D4AF37" />
              <div className="relative z-10">
                <h4 className="mb-2 flex items-center gap-2 font-serif text-base font-medium text-gold-300">
                  <Sparkles className="h-4 w-4 text-gold-400/80" />
                  靈性肯定句
                </h4>
                <p className="font-serif text-base italic leading-loose text-cream-100/90">
                  「{card.meditation.affirmation}」
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
