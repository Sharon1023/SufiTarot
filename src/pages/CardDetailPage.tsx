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
  ChevronDown,
  Feather,
  ScrollText,
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

type ChapterId = 'philosophy' | 'definition' | 'guidance' | 'meditation' | null;

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

const chapters: { id: ChapterId; label: string; subtitle: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'philosophy', label: '核心蘇菲哲學', subtitle: 'Sufi Philosophy', icon: Feather },
  { id: 'definition', label: '書本定義', subtitle: 'Book Definition', icon: BookOpen },
  { id: 'guidance', label: '一對一導師引導', subtitle: 'Mentor Guidance', icon: Compass },
  { id: 'meditation', label: '每日冥想與肯定句', subtitle: 'Meditation & Affirmation', icon: Sun },
];

function ChapterDivider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 gold-rule opacity-20" />
      <Sparkles className="h-3 w-3 text-gold-500/40" />
      <div className="h-px flex-1 gold-rule opacity-20" />
    </div>
  );
}

export function CardDetailPage({ cardId, onBack }: CardDetailPageProps) {
  const [orientation, setOrientation] = useState<Orientation>('upright');
  const [activeArea, setActiveArea] = useState<LifeArea | null>(null);
  const [openChapter, setOpenChapter] = useState<ChapterId>('philosophy');

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

  const toggleChapter = (id: ChapterId) => {
    setOpenChapter((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      <Header
        title={`${card.name} · ${card.sufiName}`}
        subtitle={`${suit.name} · 第 ${card.number} 張`}
        onBack={onBack}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        {/* ───── Layer 1: Sanctuary Hero ───── */}
        <div className="relative flex flex-col items-center gap-6 animate-fade-in-up">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold-500/8 blur-3xl" />

          {/* card number badge */}
          <div className="relative z-10 flex items-center gap-2 rounded-full border border-gold-500/20 bg-velvet-200/40 px-4 py-1.5 text-[11px] tracking-[0.25em] text-gold-400/60">
            <span className="font-serif">{card.number}</span>
            <span className="h-3 w-px bg-gold-500/20" />
            <span className="uppercase">{suit.subtitle}</span>
          </div>

          {/* card art with flip */}
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute inset-0 -m-4 rounded-2xl bg-gold-500/8 blur-2xl animate-pulse-soft" />
            <div className="relative perspective">
              <CardArt
                suitId={card.suitId}
                name={card.name}
                number={card.number}
                visualId={card.visualId}
                size="lg"
                reversed={isReversed}
                flipOnHover
              />
            </div>
          </div>

          {/* name + sufi name */}
          <div className="relative z-10 flex flex-col items-center gap-1 text-center">
            <h2 className="font-serif text-3xl font-bold text-cream-100 text-illuminated sm:text-4xl">
              {card.name}
            </h2>
            <p className="font-serif text-sm italic text-gold-400/70">{card.sufiName}</p>
          </div>

          {/* orientation toggle */}
          <div className="relative z-10 inline-flex rounded-full border border-gold-500/20 bg-velvet-200/40 p-1">
            <button
              onClick={() => setOrientation('upright')}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
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
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
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
          <div className="relative z-10 flex flex-wrap justify-center gap-2 max-w-md">
            {meaning.keywords.map((k) => (
              <span key={k} className="rounded-full border border-gold-500/15 bg-velvet-200/30 px-3 py-1 text-xs text-sage-100/80">
                {k}
              </span>
            ))}
          </div>

          <p className="relative z-10 text-xs text-sage-300/50">
            {suit.name} · {suit.element}元素 · {suit.elementArabic}
            {isReversed ? ' · 逆位能量流轉' : ' · 正位之光顯現'}
          </p>
        </div>

        {/* ───── Layer 2: Chapter Divider ───── */}
        <div className="mt-12 mb-6 flex flex-col items-center gap-2 animate-fade-in">
          <SufiOrnament size={36} className="opacity-40" color="#D4AF37" />
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-500/40">Chapters · 章節</p>
        </div>

        {/* ───── Layer 3: Unfolding Chapters ───── */}
        <div className="flex flex-col gap-3">
          {chapters.map((ch, idx) => {
            const isOpen = openChapter === ch.id;
            const Icon = ch.icon;
            const isMeditationMissing = ch.id === 'meditation' && !card.meditation;

            if (isMeditationMissing) return null;

            return (
              <div
                key={ch.id}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="animate-fade-in-up overflow-hidden rounded-2xl border border-gold-500/15 glass-panel"
              >
                {/* chapter header — clickable */}
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className={`flex w-full items-center gap-3 px-5 py-4 text-left transition-colors duration-300 ${
                    isOpen ? 'bg-midnight-200/30' : 'hover:bg-velvet-200/20'
                  }`}
                >
                  {/* chapter number */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/25 font-serif text-xs text-gold-400/70">
                    {idx + 1}
                  </span>

                  {/* icon */}
                  <Icon className={`h-5 w-5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-gold-500/50'}`} />

                  {/* labels */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="font-serif text-sm font-medium text-cream-100">{ch.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-gold-500/40">{ch.subtitle}</span>
                  </div>

                  {/* status badge for guidance chapter */}
                  {ch.id === 'guidance' && activeArea && (
                    <span className="hidden rounded-full border border-gold-500/20 bg-midnight-200/40 px-2.5 py-0.5 text-[10px] text-gold-400/60 sm:inline">
                      {activeArea}
                    </span>
                  )}

                  {/* chevron */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-500/50 transition-transform duration-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* chapter content — unfolding */}
                {isOpen && (
                  <div key={`${ch.id}-${orientation}`} className="animate-fade-in-up px-5 pb-6">
                    <ChapterDivider />

                    {/* ── Philosophy ── */}
                    {ch.id === 'philosophy' && (
                      <div className="pt-3">
                        <div className="mb-3 flex items-center gap-2">
                          <SufiOrnament size={16} className="opacity-50" color="#D4AF37" />
                          <h4 className="font-serif text-base font-medium text-cream-100">核心蘇菲哲學</h4>
                          <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
                            {isReversed ? '逆位' : '正位'}
                          </span>
                        </div>
                        <p className="border-l-2 border-gold-500/40 pl-4 text-sm leading-loose text-sage-100/85">
                          {meaning.philosophy}
                        </p>
                      </div>
                    )}

                    {/* ── Definition ── */}
                    {ch.id === 'definition' && (
                      <div className="pt-3">
                        <div className="mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-gold-500/80" />
                          <h4 className="font-serif text-base font-medium text-cream-100">書本定義</h4>
                          <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
                            {isReversed ? '逆位' : '正位'}
                          </span>
                        </div>
                        <p className="text-sm leading-loose text-sage-100/80">{meaning.definition}</p>
                      </div>
                    )}

                    {/* ── Guidance ── */}
                    {ch.id === 'guidance' && (
                      <div className="pt-3">
                        <p className="mb-4 text-xs leading-relaxed text-sage-300/55">
                          選擇一個生命領域，導師將根據〈{card.name}〉的{isReversed ? '逆位' : '正位'}能量，為你展開一段深度反思。
                        </p>

                        {/* life area buttons */}
                        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
                          {lifeAreas.map((area) => {
                            const s = areaStyles[area.color];
                            const Icon = area.icon;
                            const isActive = activeArea === area.id;
                            return (
                              <button
                                key={area.id}
                                onClick={() => setActiveArea(area.id)}
                                className={`group flex flex-col items-center gap-1.5 rounded-xl border p-3 transition-all duration-300 ${
                                  isActive
                                    ? `${s.activeBorder} ${s.activeBg} ${s.activeText} -translate-y-0.5 shadow-md`
                                    : `${s.border} ${s.bg} ${s.text} hover:-translate-y-0.5 hover:border-gold-500/35`
                                }`}
                              >
                                <Icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                                <span className="font-serif text-xs font-medium">{area.id}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* guidance text — unfolds within */}
                        {guidance && activeArea && (
                          <div
                            key={`${activeArea}-${orientation}`}
                            className="mt-4 animate-slide-in-right overflow-hidden rounded-xl border border-gold-500/15 bg-gradient-to-br from-velvet-200/40 to-midnight-200/40 p-5 sm:p-6"
                          >
                            <SufiOrnament size={120} className="pointer-events-none absolute -right-4 -top-4 opacity-[0.06]" color="#D4AF37" />

                            <div className="relative z-10 flex flex-col gap-3">
                              <div className="flex items-center gap-2.5">
                                {(() => {
                                  const areaInfo = lifeAreas.find((a) => a.id === activeArea)!;
                                  const s = areaStyles[areaInfo.color];
                                  const Icon = areaInfo.icon;
                                  return (
                                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${s.activeBorder} ${s.activeBg} ${s.activeText}`}>
                                      <Icon className="h-4 w-4" />
                                    </div>
                                  );
                                })()}
                                <div className="flex flex-col">
                                  <p className="text-[9px] uppercase tracking-[0.2em] text-gold-500/45">導師引導</p>
                                  <h5 className="font-serif text-sm font-semibold text-cream-100">〈{card.name}〉· {activeArea}</h5>
                                </div>
                                <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
                                  {isReversed ? '逆位' : '正位'}
                                </span>
                              </div>

                              <div className="h-px gold-rule opacity-20" />

                              <p className="font-serif text-[15px] leading-loose text-cream-100/90">{guidance}</p>

                              <div className="mt-1 flex items-start gap-2 rounded-lg border border-gold-500/10 bg-midnight-200/30 p-3">
                                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500/70" />
                                <p className="text-[11px] leading-relaxed text-sage-300/55">
                                  靜下心，將這段引導讀三遍。第一遍以眼讀，第二遍以心讀，第三遍讓它在你的呼吸中沉降——答案會在你沉默時浮現。
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {!activeArea && (
                          <div className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-dashed border-gold-500/15 bg-velvet-200/20 p-6 text-center">
                            <SufiOrnament size={40} className="opacity-20" color="#D4AF37" />
                            <p className="text-xs text-sage-300/45">選擇上方一個生命領域，開始你的反思之旅</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ── Meditation ── */}
                    {ch.id === 'meditation' && card.meditation && (
                      <div className="pt-3">
                        {/* contemplation questions */}
                        <div className="mb-5">
                          <h4 className="mb-3 flex items-center gap-2 font-serif text-sm font-medium text-cream-100">
                            <Feather className="h-4 w-4 text-gold-500/70" />
                            心靈反思問題
                          </h4>
                          <ul className="flex flex-col gap-2.5">
                            {card.meditation.contemplations.map((q, i) => (
                              <li
                                key={i}
                                style={{ animationDelay: `${i * 80}ms` }}
                                className="flex items-start gap-3 animate-fade-in-up rounded-xl border border-gold-500/10 bg-midnight-200/40 p-3.5"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/25 font-serif text-[10px] text-gold-400">
                                  {i + 1}
                                </span>
                                <span className="text-sm leading-relaxed text-sage-100/85">{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <ChapterDivider />

                        {/* affirmation */}
                        <div className="mt-4 relative overflow-hidden rounded-xl border border-gold-500/20 bg-gradient-to-br from-midnight-200/60 to-midnight-300/60 p-5">
                          <SufiOrnament size={70} className="pointer-events-none absolute -right-2 -top-2 opacity-15" color="#D4AF37" />
                          <div className="relative z-10">
                            <h4 className="mb-2 flex items-center gap-2 font-serif text-sm font-medium text-gold-300">
                              <Sparkles className="h-4 w-4 text-gold-400/80" />
                              靈性肯定句
                            </h4>
                            <p className="font-serif text-base italic leading-loose text-cream-100/90">
                              「{card.meditation.affirmation}」
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ───── Closing Seal ───── */}
        <div className="mt-12 flex flex-col items-center gap-2 animate-fade-in">
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="h-px flex-1 gold-rule opacity-20" />
            <SufiOrnament size={28} className="opacity-40" color="#D4AF37" />
            <div className="h-px flex-1 gold-rule opacity-20" />
          </div>
          <p className="font-serif text-xs text-gold-500/35">
            {card.name} · {suit.name} · 第 {card.number} 張
          </p>
        </div>
      </div>
    </div>
  );
}
