import { useState, useCallback } from 'react';
import {
  RotateCw,
  Compass,
  Heart,
  Briefcase,
  Coins,
  Users,
  Moon,
  Sparkles,
  Lightbulb,
  Feather,
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

const lifeAreas: { id: LifeArea; icon: React.ComponentType<{ className?: string }>; color: string; accent: string }[] = [
  { id: '感情', icon: Heart, color: 'rose', accent: 'text-rose-300' },
  { id: '事業', icon: Briefcase, color: 'gold', accent: 'text-gold-300' },
  { id: '財務', icon: Coins, color: 'emerald', accent: 'text-emerald-300' },
  { id: '親情', icon: Users, color: 'sky', accent: 'text-sky-300' },
  { id: '健康', icon: Moon, color: 'violet', accent: 'text-violet-300' },
];

const areaBorder: Record<string, string> = {
  rose: 'border-rose-400/20',
  gold: 'border-gold-500/20',
  emerald: 'border-emerald-500/20',
  sky: 'border-sky-400/20',
  violet: 'border-violet-400/20',
};

const areaIconBg: Record<string, string> = {
  rose: 'bg-rose-950/40 border-rose-400/40 text-rose-300',
  gold: 'bg-gold-900/30 border-gold-500/40 text-gold-300',
  emerald: 'bg-emerald-950/40 border-emerald-400/40 text-emerald-300',
  sky: 'bg-sky-950/40 border-sky-400/40 text-sky-300',
  violet: 'bg-violet-950/40 border-violet-400/40 text-violet-300',
};

const sufiWisdomPool = [
  '傷口是光進入你身體的地方。——魯米',
  '你尋找的火種，正在你之內。——魯米',
  '一滴水如何不乾涸？讓它流入河流。——蘇菲諺語',
  '信任神，但先繫好你的駱駝。——蘇菲諺語',
  '最大的貧窮不是缺乏金錢，而是缺乏內在的寧靜。——蘇菲導師',
  '一個覺醒的人，能療癒七代祖先與七代後裔。——蘇菲教導',
  '有一束光，從你心中通往宇宙。——魯米',
  '你不是一滴水在海洋裡，你是整個海洋在一滴水裡。——魯米',
  '讓你自己被更強的愛所牽引。——魯米',
  '外在的知識可以言傳，內在的智慧只能被寂靜承載。——蘇菲教導',
  '真正的路是走出來的，不是想出來的。——蘇菲行者智慧',
  '當你真正信任，整個宇宙會托住你。——蘇菲教導',
];

function SectionHeading({ icon: Icon, title, subtitle }: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle?: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-midnight-200/50">
        <Icon className="h-4.5 w-4.5 text-gold-400" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-serif text-lg font-semibold text-cream-100 text-illuminated">{title}</h3>
        {subtitle && <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500/40">{subtitle}</p>}
      </div>
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 gold-rule opacity-25" />
      <Sparkles className="h-3 w-3 text-gold-500/40" />
      <div className="h-px flex-1 gold-rule opacity-25" />
    </div>
  );
}

export function CardDetailPage({ cardId, onBack }: CardDetailPageProps) {
  const [orientation, setOrientation] = useState<Orientation>('upright');
  const [oracleText, setOracleText] = useState<string | null>(null);
  const [oracleKey, setOracleKey] = useState(0);

  const card: CardData | undefined = CARDS.find((c) => c.id === cardId);

  const drawOracle = useCallback(() => {
    if (!card) return;
    const pool: string[] = [];
    if (card.meditation) {
      pool.push(card.meditation.affirmation);
      pool.push(...card.meditation.contemplations);
    }
    pool.push(...sufiWisdomPool);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setOracleText(pick);
    setOracleKey((k) => k + 1);
  }, [card]);

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

  return (
    <div className="min-h-screen">
      <Header
        title={`${card.name} · ${card.sufiName}`}
        subtitle={`${suit.name} · 第 ${card.number} 張`}
        onBack={onBack}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        {/* ───── 1. Hero: Card + Tags ───── */}
        <div className="flex flex-col items-center gap-5 animate-fade-in-up">
          <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-64 w-64 rounded-full bg-gold-500/8 blur-3xl" />

          {/* card number badge */}
          <div className="relative z-10 flex items-center gap-2 rounded-full border border-gold-500/20 bg-velvet-200/40 px-4 py-1.5 text-[11px] tracking-[0.25em] text-gold-400/60">
            <span className="font-serif">{card.number}</span>
            <span className="h-3 w-px bg-gold-500/20" />
            <span className="uppercase">{suit.subtitle}</span>
          </div>

          {/* card art */}
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

          {/* name */}
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="font-serif text-3xl font-bold text-cream-100 text-illuminated sm:text-4xl">
              {card.name}
            </h2>
            <p className="font-serif text-sm italic text-gold-400/70">{card.sufiName}</p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap justify-center gap-2 max-w-md">
            {meaning.keywords.map((k) => (
              <span key={k} className="rounded-full border border-gold-500/15 bg-velvet-200/30 px-3 py-1 text-xs text-sage-100/80">
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* ───── 2. 牌面解析 (merged philosophy + definition) ───── */}
        <section className="mt-12 animate-fade-in-up rounded-2xl border border-gold-500/15 glass-panel p-6 sm:p-8">
          <SectionHeading icon={Feather} title="牌面解析" subtitle="Card Interpretation" />

          <p className="text-sm leading-loose text-sage-100/85">
            {meaning.philosophy}
          </p>

          <GoldDivider />

          <p className="text-sm leading-loose text-sage-100/80">
            {meaning.definition}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-sage-300/50">
            <span>{suit.name} · {suit.element}元素 · {suit.elementArabic}</span>
            <span className={`rounded-full px-2.5 py-0.5 ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
              {isReversed ? '逆位能量流轉' : '正位之光顯現'}
            </span>
          </div>
        </section>

        {/* ───── 3. Orientation toggle ───── */}
        <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in">
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-500/40">Orientation · 正逆位</p>
          <div className="inline-flex rounded-full border border-gold-500/20 bg-velvet-200/40 p-1">
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
        </div>

        {/* ───── 4. Life Area Guidance (all visible) ───── */}
        <section className="mt-8">
          <SectionHeading icon={Compass} title="生活領域論述" subtitle="Life Areas · 五大生活面向" />

          <div key={orientation} className="flex flex-col gap-3">
            {lifeAreas.map((area, idx) => {
              const Icon = area.icon;
              const text = card.guidance[area.id][orientation];
              return (
                <div
                  key={area.id}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className={`animate-fade-in-up rounded-2xl border ${areaBorder[area.color]} bg-velvet-200/30 p-5 transition-colors duration-300 hover:border-gold-500/30`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${areaIconBg[area.color]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-serif text-base font-semibold ${area.accent}`}>{area.id}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-gold-500/35">
                        {area.id === '感情' && 'Love & Relationship'}
                        {area.id === '事業' && 'Career & Vocation'}
                        {area.id === '財務' && 'Finance & Wealth'}
                        {area.id === '親情' && 'Family & Kinship'}
                        {area.id === '健康' && 'Health & Wellbeing'}
                      </span>
                    </div>
                    <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] ${isReversed ? 'bg-rose-950/50 text-rose-300' : 'bg-emerald-950/50 text-emerald-300'}`}>
                      {isReversed ? '逆位' : '正位'}
                    </span>
                  </div>
                  <div className="mt-3 h-px gold-rule opacity-15" />
                  <p className="mt-3 text-sm leading-loose text-sage-100/85">{text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ───── 5. Sufi Oracle — Lucky Draw ───── */}
        <section className="mt-12 flex flex-col items-center gap-5 animate-fade-in-up">
          <GoldDivider />

          <div className="flex flex-col items-center gap-2">
            <SufiOrnament size={40} className="opacity-50" color="#D4AF37" />
            <h3 className="font-serif text-xl font-semibold text-cream-100 text-illuminated">天啟箴言</h3>
            <p className="text-xs text-sage-300/50">Sufi Guidance · 領受此刻屬於你的神聖訊息</p>
          </div>

          {/* oracle reveal area */}
          <div className="relative w-full min-h-[120px] overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-br from-midnight-200/60 to-midnight-300/60 p-6 sm:p-8">
            <SufiOrnament size={140} className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06]" color="#D4AF37" />

            {!oracleText && (
              <div className="flex h-full min-h-[80px] flex-col items-center justify-center gap-2 text-center">
                <Sparkles className="h-6 w-6 text-gold-500/40" />
                <p className="font-serif text-sm text-sage-300/45">點擊下方按鈕，領受來自蘇菲智者的天啟</p>
              </div>
            )}

            {oracleText && (
              <div key={oracleKey} className="relative z-10 flex flex-col items-center gap-3 animate-fade-in-up text-center">
                <Lightbulb className="h-6 w-6 text-gold-400/70" />
                <p className="font-serif text-lg italic leading-loose text-cream-100/90">
                  「{oracleText}」
                </p>
                <div className="h-px w-16 gold-rule opacity-40" />
              </div>
            )}
          </div>

          {/* draw button */}
          <button
            onClick={drawOracle}
            className="group relative inline-flex items-center gap-2.5 rounded-full border-2 border-gold-500/40 bg-gradient-to-br from-velvet-200/60 to-midnight-200/60 px-8 py-3.5 font-serif text-base font-medium text-gold-300 transition-all duration-500 hover:border-gold-500/70 hover:from-velvet-100/60 hover:to-midnight-100/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.20)] active:scale-95"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gold-500/8 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <Sparkles className="h-5 w-5 text-gold-400 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
            <span className="relative z-10">{oracleText ? '再抽一次' : '領受天啟'}</span>
          </button>
        </section>

        {/* ───── Closing ───── */}
        <div className="mt-12 flex flex-col items-center gap-2 animate-fade-in">
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="h-px flex-1 gold-rule opacity-20" />
            <SufiOrnament size={24} className="opacity-35" color="#D4AF37" />
            <div className="h-px flex-1 gold-rule opacity-20" />
          </div>
          <p className="font-serif text-xs text-gold-500/30">
            {card.name} · {suit.name} · 第 {card.number} 張
          </p>
        </div>
      </div>
    </div>
  );
}
