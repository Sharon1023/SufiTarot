import { SufiOrnament } from './SufiOrnament';

export type VisualId = 'fool' | 'alchemist' | 'murshida' | 'shahbanu';

interface CardVisualProps {
  visualId: VisualId;
  className?: string;
}

/** Shifting desert gradient with dunes and a figure leaping into the void. */
function FoolVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fool-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="30%" stopColor="#0a2a20" />
          <stop offset="60%" stopColor="#1a4d3a" />
          <stop offset="85%" stopColor="#3a6b52" />
          <stop offset="100%" stopColor="#c4954a" />
        </linearGradient>
        <radialGradient id="fool-sun" cx="0.5" cy="0.35" r="0.15">
          <stop offset="0%" stopColor="#f4e5ad" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fool-dune1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6b3a" />
          <stop offset="100%" stopColor="#5c481f" />
        </linearGradient>
        <linearGradient id="fool-dune2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a07a42" />
          <stop offset="100%" stopColor="#6b5530" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="200" height="220" fill="url(#fool-sky)" />
      {/* sun glow */}
      <rect width="200" height="220" fill="url(#fool-sun)" />
      {/* sun disk */}
      <circle cx="100" cy="75" r="12" fill="#D4AF37" opacity="0.5" />
      <circle cx="100" cy="75" r="7" fill="#f4e5ad" opacity="0.7" />

      {/* distant dunes */}
      <path d="M0,190 Q50,170 100,180 T200,175 L200,220 L0,220 Z" fill="url(#fool-dune2)" opacity="0.6" />
      {/* near dunes */}
      <path d="M0,210 Q40,195 80,205 Q120,215 160,200 T200,205 L200,300 L0,300 Z" fill="url(#fool-dune1)" />

      {/* figure leaping */}
      <g transform="translate(95,120)">
        {/* head */}
        <circle cx="0" cy="-22" r="5" fill="#D4AF37" opacity="0.7" />
        {/* body */}
        <path d="M0,-17 Q-3,-5 -2,5 Q-1,10 0,12 Q1,10 2,5 Q3,-5 0,-17" fill="#D4AF37" opacity="0.5" />
        {/* arms spread */}
        <path d="M-2,-10 Q-10,-8 -15,-3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M2,-10 Q10,-8 15,-3" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
        {/* legs */}
        <path d="M0,12 Q-5,18 -8,25" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M0,12 Q5,16 8,22" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      {/* stars scattered */}
      <g fill="#D4AF37" opacity="0.4">
        <circle cx="30" cy="40" r="1" />
        <circle cx="170" cy="50" r="1.5" />
        <circle cx="50" cy="90" r="0.8" />
        <circle cx="150" cy="100" r="1" />
        <circle cx="180" cy="130" r="0.8" />
      </g>

      {/* horizon line */}
      <line x1="0" y1="195" x2="200" y2="195" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
}

/** Glowing geometric sun / manifestation field. */
function AlchemistVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="alc-bg" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#0a3a2f" />
          <stop offset="50%" stopColor="#041914" />
          <stop offset="100%" stopColor="#020d0a" />
        </radialGradient>
        <radialGradient id="alc-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f4e5ad" />
          <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="200" height="300" fill="url(#alc-bg)" />

      {/* outer manifestation rings */}
      <g stroke="#D4AF37" fill="none">
        <circle cx="100" cy="120" r="80" strokeWidth="0.3" opacity="0.15" />
        <circle cx="100" cy="120" r="65" strokeWidth="0.4" opacity="0.2" />
        <circle cx="100" cy="120" r="50" strokeWidth="0.5" opacity="0.25" />
      </g>

      {/* central glowing sun */}
      <circle cx="100" cy="120" r="40" fill="url(#alc-sun)" />
      <circle cx="100" cy="120" r="18" fill="#D4AF37" opacity="0.15" />
      <circle cx="100" cy="120" r="10" fill="#D4AF37" opacity="0.3" />
      <circle cx="100" cy="120" r="5" fill="#f4e5ad" opacity="0.6" />

      {/* radiating sun rays */}
      <g stroke="#D4AF37" strokeWidth="0.6" opacity="0.4">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * 20}
              y1={120 + Math.sin(a) * 20}
              x2={100 + Math.cos(a) * 45}
              y2={120 + Math.sin(a) * 45}
            />
          );
        })}
      </g>

      {/* four element symbols around the sun */}
      <g fill="#D4AF37" opacity="0.5" fontSize="10" fontFamily="serif" textAnchor="middle">
        <text x="100" y="55">△</text>
        <text x="165" y="125">▽</text>
        <text x="100" y="195">△</text>
        <text x="35" y="125">▽</text>
      </g>

      {/* geometric square (as above so below) */}
      <rect x="55" y="75" width="90" height="90" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.2" transform="rotate(45 100 120)" />

      {/* infinity symbol below */}
      <g stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4" transform="translate(100,230)">
        <path d="M-15,0 C-15,-6 -8,-6 -4,0 C0,6 8,6 15,0 C15,-6 8,-6 4,0 C0,6 -8,6 -15,0" />
      </g>

      {/* scattered sparks */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="40" cy="200" r="1" />
        <circle cx="170" cy="80" r="1.2" />
        <circle cx="160" cy="200" r="0.8" />
        <circle cx="30" cy="160" r="1" />
      </g>
    </svg>
  );
}

/** Crescent moon with a chalice / cup shape. */
function MurshidaVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mur-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020d0a" />
          <stop offset="50%" stopColor="#041914" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="mur-glow" cx="0.5" cy="0.42" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mur-cup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#937422" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#mur-bg)" />
      <rect width="200" height="300" fill="url(#mur-glow)" />

      {/* stars */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="25" cy="30" r="0.8" />
        <circle cx="50" cy="60" r="1" />
        <circle cx="175" cy="40" r="1.2" />
        <circle cx="150" cy="80" r="0.6" />
        <circle cx="20" cy="120" r="0.8" />
        <circle cx="180" cy="150" r="1" />
        <circle cx="40" cy="220" r="0.6" />
        <circle cx="170" cy="250" r="0.8" />
      </g>

      {/* crescent moon */}
      <g transform="translate(100,95)">
        <circle cx="0" cy="0" r="35" fill="#D4AF37" opacity="0.08" />
        <path
          d="M-8,-30 A30,30 0 1,0 -8,30 A22,22 0 1,1 -8,-30"
          fill="#D4AF37"
          opacity="0.35"
        />
        <circle cx="-5" cy="-15" r="1.5" fill="#041914" opacity="0.4" />
        <circle cx="8" cy="10" r="1" fill="#041914" opacity="0.3" />
      </g>

      {/* chalice / cup */}
      <g transform="translate(100,180)">
        {/* cup bowl */}
        <path
          d="M-22,0 Q-22,20 0,25 Q22,20 22,0 Z"
          fill="url(#mur-cup)"
          stroke="#D4AF37"
          strokeWidth="0.5"
          opacity="0.6"
        />
        {/* liquid surface */}
        <ellipse cx="0" cy="0" rx="22" ry="4" fill="#D4AF37" opacity="0.2" />
        {/* stem */}
        <rect x="-3" y="25" width="6" height="20" fill="#D4AF37" opacity="0.4" />
        {/* base */}
        <path d="M-12,45 L12,45 L10,50 L-10,50 Z" fill="#D4AF37" opacity="0.4" />
        {/* glow in cup */}
        <circle cx="0" cy="8" r="6" fill="#f4e5ad" opacity="0.15" />
      </g>

      {/* pillars (left and right) */}
      <line x1="30" y1="60" x2="30" y2="250" stroke="#D4AF37" strokeWidth="0.3" opacity="0.2" />
      <line x1="170" y1="60" x2="170" y2="250" stroke="#D4AF37" strokeWidth="0.3" opacity="0.2" />

      {/* veil between pillars */}
      <g stroke="#D4AF37" strokeWidth="0.2" opacity="0.15">
        <path d="M30,80 Q100,90 170,80" fill="none" />
        <path d="M30,120 Q100,130 170,120" fill="none" />
        <path d="M30,160 Q100,170 170,160" fill="none" />
      </g>
    </svg>
  );
}

/** Pomegranate fruit patterns with growth vines. */
function ShahbanuVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sha-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="40%" stopColor="#0a3a2f" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="sha-glow" cx="0.5" cy="0.35" r="0.4">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sha-pome" cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#c44030" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#8a2818" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5c1808" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      <rect width="200" height="300" fill="url(#sha-bg)" />
      <rect width="200" height="300" fill="url(#sha-glow)" />

      {/* vines — left side */}
      <g stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.3">
        <path d="M10,50 Q25,60 20,80 Q15,100 30,110 Q45,120 35,140 Q25,160 40,170 Q55,180 45,200 Q35,220 50,240" />
        <path d="M20,80 Q30,75 35,82" />
        <path d="M30,110 Q40,105 45,112" />
        <path d="M35,140 Q45,135 50,142" />
      </g>
      {/* vines — right side */}
      <g stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.3">
        <path d="M190,50 Q175,60 180,80 Q185,100 170,110 Q155,120 165,140 Q175,160 160,170 Q145,180 155,200 Q165,220 150,240" />
        <path d="M180,80 Q170,75 165,82" />
        <path d="M170,110 Q160,105 155,112" />
        <path d="M165,140 Q155,135 150,142" />
      </g>

      {/* leaves on vines */}
      <g fill="#D4AF37" opacity="0.2">
        <ellipse cx="20" cy="80" rx="4" ry="2" transform="rotate(30 20 80)" />
        <ellipse cx="180" cy="80" rx="4" ry="2" transform="rotate(-30 180 80)" />
        <ellipse cx="30" cy="110" rx="4" ry="2" transform="rotate(45 30 110)" />
        <ellipse cx="170" cy="110" rx="4" ry="2" transform="rotate(-45 170 110)" />
        <ellipse cx="45" cy="200" rx="5" ry="2.5" transform="rotate(20 45 200)" />
        <ellipse cx="155" cy="200" rx="5" ry="2.5" transform="rotate(-20 155 200)" />
      </g>

      {/* pomegranates */}
      <g>
        {/* top center pomegranate */}
        <circle cx="100" cy="70" r="16" fill="url(#sha-pome)" stroke="#D4AF37" strokeWidth="0.4" opacity="0.7" />
        <path d="M92,58 L100,52 L108,58" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.5" />
        {/* seeds visible */}
        <g fill="#D4AF37" opacity="0.3">
          <circle cx="96" cy="68" r="1.5" />
          <circle cx="104" cy="68" r="1.5" />
          <circle cx="100" cy="75" r="1.5" />
        </g>
      </g>

      {/* side pomegranates */}
      <g opacity="0.5">
        <circle cx="55" cy="130" r="11" fill="url(#sha-pome)" stroke="#D4AF37" strokeWidth="0.3" />
        <path d="M50,121 L55,117 L60,121" stroke="#D4AF37" strokeWidth="0.4" fill="none" />
      </g>
      <g opacity="0.5">
        <circle cx="145" cy="130" r="11" fill="url(#sha-pome)" stroke="#D4AF37" strokeWidth="0.3" />
        <path d="M140,121 L145,117 L150,121" stroke="#D4AF37" strokeWidth="0.4" fill="none" />
      </g>

      {/* bottom center pomegranate — opened */}
      <g transform="translate(100,180)">
        <circle cx="0" cy="0" r="20" fill="url(#sha-pome)" stroke="#D4AF37" strokeWidth="0.4" opacity="0.6" />
        {/* opened seeds radiating */}
        <g fill="#D4AF37" opacity="0.4">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return <circle key={i} cx={Math.cos(a) * 8} cy={Math.sin(a) * 8} r="2" />;
          })}
        </g>
        <circle cx="0" cy="0" r="3" fill="#D4AF37" opacity="0.5" />
      </g>

      {/* crown above */}
      <g transform="translate(100,40)" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4">
        <path d="M-12,0 L-8,-8 L-4,0 L0,-10 L4,0 L8,-8 L12,0" />
        <line x1="-12" y1="0" x2="12" y2="0" />
      </g>

      {/* base ground line */}
      <line x1="20" y1="260" x2="180" y2="260" stroke="#D4AF37" strokeWidth="0.3" opacity="0.2" />
      <line x1="40" y1="265" x2="160" y2="265" stroke="#D4AF37" strokeWidth="0.2" opacity="0.15" />
    </svg>
  );
}

const visuals: Record<VisualId, React.FC<{ className?: string }>> = {
  fool: FoolVisual,
  alchemist: AlchemistVisual,
  murshida: MurshidaVisual,
  shahbanu: ShahbanuVisual,
};

export function CardVisual({ visualId, className }: CardVisualProps) {
  const Visual = visuals[visualId];
  if (!Visual) return null;
  return <Visual className={className} />;
}

/** Check whether a visual exists for the given id. */
export function hasVisual(visualId: string | undefined): visualId is VisualId {
  return !!visualId && visualId in visuals;
}

/** Ornament for the card back — shared geometric pattern. */
export function CardBack({ className }: { className?: string }) {
  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-midnight-200 via-midnight-300 to-velvet-300 ${className ?? ''}`}>
      <div className="sufi-watermark absolute inset-0" />
      {/* corner flourishes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1.5 left-1.5 w-5 h-5 border-t border-l rounded-tl-md border-gold-500/40" />
        <div className="absolute top-1.5 right-1.5 w-5 h-5 border-t border-r rounded-tr-md border-gold-500/40" />
        <div className="absolute bottom-1.5 left-1.5 w-5 h-5 border-b border-l rounded-bl-md border-gold-500/40" />
        <div className="absolute bottom-1.5 right-1.5 w-5 h-5 border-b border-r rounded-br-md border-gold-500/40" />
      </div>
      <SufiOrnament size={80} className="animate-rotate-slow opacity-50" color="#D4AF37" />
      <div className="h-px w-12 gold-rule opacity-40" />
      <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-gold-400/50">Sufi Tarot</p>
      <p className="font-serif text-xs text-sage-300/40">蘇菲塔羅</p>
    </div>
  );
}
