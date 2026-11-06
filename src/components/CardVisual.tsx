import { SufiOrnament } from './SufiOrnament';

export type VisualId = 'fool' | 'alchemist' | 'murshida' | 'shahbanu';

interface CardVisualProps {
  visualId: VisualId;
  className?: string;
}

/* ============================================================
   THE FOOL (0) — Sufi Salik at the cliff's edge
   RWS elements: cliff, figure stepping forward, white rose,
   small dog, stick with bag, sun, mountains
   Sufi: dervish with sikke hat, desert gul rose, desert falcon,
   knotted staff, sun, dunes
   ============================================================ */
function FoolVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fool-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="25%" stopColor="#0a2a20" />
          <stop offset="55%" stopColor="#1a4d3a" />
          <stop offset="80%" stopColor="#3a6b52" />
          <stop offset="100%" stopColor="#c4954a" />
        </linearGradient>
        <radialGradient id="fool-sun" cx="0.5" cy="0.25" r="0.18">
          <stop offset="0%" stopColor="#f4e5ad" />
          <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fool-dune1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6b3a" />
          <stop offset="100%" stopColor="#4a3818" />
        </linearGradient>
        <linearGradient id="fool-dune2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a07a42" />
          <stop offset="100%" stopColor="#5c481f" />
        </linearGradient>
        <linearGradient id="fool-cliff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b5530" />
          <stop offset="100%" stopColor="#2a1f0e" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="200" height="210" fill="url(#fool-sky)" />
      <rect width="200" height="210" fill="url(#fool-sun)" />

      {/* sun disk with rays */}
      <g transform="translate(100,50)">
        <circle r="14" fill="#D4AF37" opacity="0.15" />
        <circle r="9" fill="#D4AF37" opacity="0.4" />
        <circle r="5" fill="#f4e5ad" opacity="0.7" />
        <g stroke="#D4AF37" strokeWidth="0.5" opacity="0.3">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return <line key={i} x1={Math.cos(a) * 12} y1={Math.sin(a) * 12} x2={Math.cos(a) * 20} y2={Math.sin(a) * 20} />;
          })}
        </g>
      </g>

      {/* stars */}
      <g fill="#D4AF37" opacity="0.4">
        <circle cx="25" cy="30" r="1" />
        <circle cx="170" cy="45" r="1.2" />
        <circle cx="45" cy="70" r="0.7" />
        <circle cx="155" cy="80" r="0.9" />
        <circle cx="180" cy="110" r="0.7" />
      </g>

      {/* distant mountain peaks */}
      <path d="M0,165 L30,130 L55,155 L80,120 L110,150 L140,125 L170,145 L200,135 L200,190 L0,190 Z"
        fill="#1a4d3a" opacity="0.5" />

      {/* distant dunes */}
      <path d="M0,185 Q50,170 100,178 T200,175 L200,210 L0,210 Z" fill="url(#fool-dune2)" opacity="0.6" />

      {/* near dunes with cliff edge on right */}
      <path d="M0,210 Q40,195 80,205 Q110,210 120,208 L120,208 L130,210 L200,200 L200,300 L0,300 Z"
        fill="url(#fool-dune1)" />

      {/* cliff edge — the void below */}
      <path d="M120,208 L130,210 L135,300 L120,300 Z" fill="url(#fool-cliff)" />
      <path d="M135,210 L200,200 L200,300 L135,300 Z" fill="#020d0a" opacity="0.6" />

      {/* the Salik (dervish wanderer) standing at cliff edge */}
      <g transform="translate(105,135)">
        {/* conical dervish hat (sikke) */}
        <path d="M-4,-38 L4,-38 L2,-50 L-2,-50 Z" fill="#D4AF37" opacity="0.6" />
        <ellipse cx="0" cy="-38" rx="5" ry="1.5" fill="#D4AF37" opacity="0.5" />
        {/* head */}
        <circle cx="0" cy="-33" r="4.5" fill="#D4AF37" opacity="0.7" />
        {/* body — flowing dervish robe */}
        <path d="M-5,-28 Q-8,-15 -10,0 Q-9,10 -7,18 L7,18 Q9,10 10,0 Q8,-15 5,-28 Z"
          fill="#D4AF37" opacity="0.4" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
        {/* right arm — reaching forward */}
        <path d="M5,-22 Q12,-18 18,-15" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* left arm — holding white rose */}
        <path d="M-5,-22 Q-10,-18 -12,-12" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* white rose (gul) in left hand */}
        <circle cx="-13" cy="-11" r="3" fill="#f4e5ad" opacity="0.6" stroke="#D4AF37" strokeWidth="0.3" />
        <circle cx="-13" cy="-11" r="1.5" fill="#D4AF37" opacity="0.3" />
        {/* legs — one foot forward at the edge */}
        <path d="M-3,18 Q-5,24 -7,30" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M3,18 Q6,24 8,30" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      {/* knotted staff with small bundle over shoulder */}
      <g transform="translate(90,115)" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" fill="none">
        <path d="M0,0 Q3,-15 0,-30" />
        {/* bundle at end */}
        <ellipse cx="0" cy="-32" rx="4" ry="3" fill="#D4AF37" opacity="0.2" />
      </g>

      {/* small desert falcon at feet (replacing the dog) */}
      <g transform="translate(115,200)" opacity="0.5">
        <ellipse cx="0" cy="0" rx="5" ry="3" fill="#D4AF37" opacity="0.5" />
        <circle cx="3" cy="-2" r="2" fill="#D4AF37" opacity="0.6" />
        <path d="M5,-2 L8,-1" stroke="#D4AF37" strokeWidth="0.5" />
        {/* wing detail */}
        <path d="M-2,-1 Q0,-4 3,-3" stroke="#D4AF37" strokeWidth="0.4" fill="none" />
      </g>

      {/* cliff edge highlight line */}
      <line x1="120" y1="208" x2="200" y2="200" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />

      {/* horizon glow */}
      <line x1="0" y1="185" x2="200" y2="185" stroke="#D4AF37" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}

/* ============================================================
   THE MAGICIAN (1) — Sufi Alchemist at the workbench
   RWS elements: standing figure, infinity above head, table
   with 4 suit tools, as-above-so-below gesture, roses/lilies
   Sufi: alchemist with lemniscate, four elements on table,
   Sufi geometric garden below, pointing gesture
   ============================================================ */
function AlchemistVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="alc-bg" cx="0.5" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#0a3a2f" />
          <stop offset="50%" stopColor="#041914" />
          <stop offset="100%" stopColor="#020d0a" />
        </radialGradient>
        <radialGradient id="alc-glow" cx="0.5" cy="0.3" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="alc-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c481f" />
          <stop offset="100%" stopColor="#3a2e15" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#alc-bg)" />
      <rect width="200" height="300" fill="url(#alc-glow)" />

      {/* Sufi geometric arch background */}
      <g stroke="#D4AF37" fill="none" opacity="0.08">
        <path d="M20,250 Q20,160 60,140 Q100,120 140,140 Q180,160 180,250" strokeWidth="0.5" />
        <path d="M35,250 Q35,170 65,155 Q100,140 135,155 Q165,170 165,250" strokeWidth="0.3" />
      </g>

      {/* manifestation rings around figure */}
      <g stroke="#D4AF37" fill="none" opacity="0.1">
        <circle cx="100" cy="100" r="75" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="60" strokeWidth="0.4" />
      </g>

      {/* infinity symbol (lemniscate) above head */}
      <g transform="translate(100,45)" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5">
        <path d="M-14,0 C-14,-7 -7,-7 0,0 C7,7 14,7 14,0 C14,-7 7,-7 0,0 C-7,7 -14,7 -14,0" />
      </g>

      {/* the Alchemist figure */}
      <g transform="translate(100,90)">
        {/* head */}
        <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.6" />
        {/* white inner robe */}
        <path d="M-8,6 Q-10,25 -12,50 L12,50 Q10,25 8,6 Z" fill="#f4e5ad" opacity="0.15" />
        {/* red outer robe (gold in Sufi palette) */}
        <path d="M-10,6 Q-14,30 -16,55 L16,55 Q14,30 10,6 Z" fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.4" />
        {/* right arm raised — pointing up with wand */}
        <path d="M8,8 Q15,0 20,-15" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* double-ended wand in right hand */}
        <line x1="20" y1="-15" x2="20" y2="-28" stroke="#f4e5ad" strokeWidth="1.5" opacity="0.7" />
        <circle cx="20" cy="-28" r="2" fill="#f4e5ad" opacity="0.6" />
        <circle cx="20" cy="-15" r="1.5" fill="#D4AF37" opacity="0.5" />
        {/* left arm pointing down */}
        <path d="M-8,8 Q-14,18 -16,30" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* finger pointing down */}
        <line x1="-16" y1="30" x2="-16" y2="36" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      </g>

      {/* the table/workbench with four suit symbols */}
      <rect x="45" y="160" width="110" height="6" fill="url(#alc-table)" rx="1" />
      <rect x="48" y="166" width="4" height="40" fill="url(#alc-table)" />
      <rect x="148" y="166" width="4" height="40" fill="url(#alc-table)" />

      {/* four suit tools on the table */}
      {/* Wand (Staffs / Fire) */}
      <g transform="translate(65,155)">
        <line x1="0" y1="-8" x2="0" y2="5" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
        <path d="M-2,-8 L0,-12 L2,-8" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.6" />
      </g>
      {/* Cup (Cups / Water) */}
      <g transform="translate(90,155)">
        <path d="M-4,-5 Q-4,2 0,3 Q4,2 4,-5 Z" fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.5" />
        <ellipse cx="0" cy="-5" rx="4" ry="1" fill="#D4AF37" opacity="0.2" />
        <rect x="-0.5" y="3" width="1" height="3" fill="#D4AF37" opacity="0.3" />
      </g>
      {/* Sword (Swords / Air) */}
      <g transform="translate(115,155)">
        <path d="M0,-12 L1.5,5 L-1.5,5 Z" fill="#D4AF37" opacity="0.4" />
        <line x1="-4" y1="5" x2="4" y2="5" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        <line x1="0" y1="5" x2="0" y2="9" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
      </g>
      {/* Pentacle (Coins / Earth) */}
      <g transform="translate(140,155)">
        <circle cx="0" cy="-2" r="5" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        {/* eight-pointed star inside */}
        <g stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4">
          <path d="M0,-6 L1,-1 L6,0 L1,1 L0,6 L-1,1 L-6,0 L-1,-1 Z" />
        </g>
      </g>

      {/* garden below — roses and lilies */}
      <g transform="translate(0,215)">
        {/* red/gold roses */}
        <g opacity="0.35">
          <circle cx="55" cy="10" r="3" fill="#c44030" opacity="0.5" />
          <circle cx="55" cy="10" r="1.5" fill="#D4AF37" opacity="0.3" />
          <circle cx="70" cy="8" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="130" cy="9" r="3" fill="#c44030" opacity="0.5" />
          <circle cx="130" cy="9" r="1.5" fill="#D4AF37" opacity="0.3" />
          <circle cx="145" cy="7" r="2" fill="#c44030" opacity="0.4" />
        </g>
        {/* white lilies */}
        <g opacity="0.3">
          <path d="M85,12 L83,5 L85,2 L87,5 Z" fill="#f4e5ad" />
          <path d="M115,12 L113,5 L115,2 L117,5 Z" fill="#f4e5ad" />
        </g>
        {/* leaves */}
        <g fill="#1a4d3a" opacity="0.3">
          <ellipse cx="50" cy="12" rx="3" ry="1.5" transform="rotate(30 50 12)" />
          <ellipse cx="75" cy="12" rx="3" ry="1.5" transform="rotate(-20 75 12)" />
          <ellipse cx="125" cy="12" rx="3" ry="1.5" transform="rotate(20 125 12)" />
          <ellipse cx="150" cy="12" rx="3" ry="1.5" transform="rotate(-30 150 12)" />
        </g>
        {/* ground line */}
        <line x1="0" y1="15" x2="200" y2="15" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" />
      </g>

      {/* scattered sparks of manifestation */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="40" cy="80" r="0.8" />
        <circle cx="170" cy="70" r="1" />
        <circle cx="30" cy="130" r="0.7" />
        <circle cx="175" cy="120" r="0.8" />
        <circle cx="160" cy="200" r="0.6" />
      </g>

      {/* "as above so below" vertical line of light */}
      <line x1="100" y1="50" x2="100" y2="220" stroke="#D4AF37" strokeWidth="0.3" opacity="0.08" />
    </svg>
  );
}

/* ============================================================
   THE HIGH PRIESTESS (2) — Sufi Murshida between the pillars
   RWS elements: seated between two pillars, moon crown, scroll,
   pomegranate veil, crescent at feet, blue robes
   Sufi: Murshida between two Sufi arch-pillars, crescent crown,
   scroll with divine wisdom, pomegranate curtain, crescent moon
   ============================================================ */
function MurshidaVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mur-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020d0a" />
          <stop offset="40%" stopColor="#041914" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="mur-glow" cx="0.5" cy="0.35" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mur-veil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3a2f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#041914" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#mur-bg)" />
      <rect width="200" height="300" fill="url(#mur-glow)" />

      {/* stars */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="25" cy="25" r="0.8" />
        <circle cx="50" cy="50" r="1" />
        <circle cx="175" cy="30" r="1.2" />
        <circle cx="150" cy="55" r="0.6" />
        <circle cx="20" cy="100" r="0.8" />
        <circle cx="180" cy="95" r="1" />
      </g>

      {/* pomegranate veil/curtain behind */}
      <rect x="25" y="60" width="150" height="200" fill="url(#mur-veil)" />
      {/* pomegranates on the veil */}
      <g opacity="0.2">
        {[
          [50, 90], [100, 80], [150, 90],
          [60, 140], [120, 135], [170, 145],
          [40, 190], [90, 185], [140, 195],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#c44030" opacity="0.4" stroke="#D4AF37" strokeWidth="0.3" />
        ))}
      </g>
      {/* palm-leaf patterns on veil */}
      <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.12">
        <path d="M75,100 Q80,90 85,100" />
        <path d="M125,100 Q130,90 135,100" />
        <path d="M55,160 Q60,150 65,160" />
        <path d="M145,160 Q150,150 155,160" />
      </g>

      {/* left pillar (dark — Boaz) */}
      <rect x="30" y="60" width="12" height="200" fill="#020d0a" opacity="0.8" />
      <rect x="28" y="58" width="16" height="6" fill="#020d0a" opacity="0.9" rx="1" />
      <text x="36" y="265" fill="#D4AF37" opacity="0.3" fontSize="8" fontFamily="serif" textAnchor="middle">B</text>

      {/* right pillar (light — Jachin) */}
      <rect x="158" y="60" width="12" height="200" fill="#D4AF37" opacity="0.15" />
      <rect x="156" y="58" width="16" height="6" fill="#D4AF37" opacity="0.25" rx="1" />
      <text x="164" y="265" fill="#D4AF37" opacity="0.3" fontSize="8" fontFamily="serif" textAnchor="middle">J</text>

      {/* Sufi arch connecting the pillars */}
      <path d="M30,65 Q100,30 170,65" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.2" />
      <path d="M36,68 Q100,38 164,68" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.15" />

      {/* the Murshida — seated figure */}
      <g transform="translate(100,120)">
        {/* crescent moon crown */}
        <g transform="translate(0,-42)" opacity="0.6">
          <path d="M-8,2 A8,8 0 1,0 8,2 A6,6 0 1,1 -8,2" fill="#D4AF37" />
        </g>
        {/* face */}
        <circle cx="0" cy="-30" r="6" fill="#D4AF37" opacity="0.5" />
        {/* blue robe → deep emerald robe in Sufi palette */}
        <path d="M-15,-22 Q-20,0 -22,35 Q-20,50 -15,55 L15,55 Q20,50 22,35 Q20,0 15,-22 Z"
          fill="#0a3a2f" opacity="0.6" stroke="#D4AF37" strokeWidth="0.3" />
        {/* cross on chest → Sufi eight-pointed star */}
        <g transform="translate(0,-5)" opacity="0.4">
          <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" fill="#D4AF37" />
        </g>
        {/* hands holding scroll */}
        <rect x="-12" y="5" width="24" height="14" rx="2" fill="#f4e5ad" opacity="0.15" stroke="#D4AF37" strokeWidth="0.3" />
        {/* scroll text lines (Arabic-style calligraphy suggestion) */}
        <g stroke="#D4AF37" strokeWidth="0.3" opacity="0.25">
          <line x1="-8" y1="9" x2="8" y2="9" />
          <line x1="-8" y1="12" x2="6" y2="12" />
          <line x1="-8" y1="15" x2="8" y2="15" />
        </g>
        {/* TORA → DHIKR scroll label */}
        <text x="0" y="19" fill="#D4AF37" opacity="0.25" fontSize="3.5" fontFamily="serif" textAnchor="middle">DHIKR</text>
      </g>

      {/* crescent moon at feet */}
      <g transform="translate(100,230)" opacity="0.4">
        <path d="M-12,0 A12,12 0 1,0 12,0 A9,9 0 1,1 -12,0" fill="#D4AF37" />
      </g>

      {/* veil drape at bottom */}
      <path d="M25,260 Q100,270 175,260 L175,300 L25,300 Z" fill="#0a3a2f" opacity="0.3" />

      {/* faint geometric pattern on veil */}
      <g stroke="#D4AF37" strokeWidth="0.2" fill="none" opacity="0.08">
        <rect x="60" y="100" width="30" height="30" transform="rotate(45 75 115)" />
        <rect x="110" y="100" width="30" height="30" transform="rotate(45 125 115)" />
        <rect x="60" y="170" width="30" height="30" transform="rotate(45 75 185)" />
        <rect x="110" y="170" width="30" height="30" transform="rotate(45 125 185)" />
      </g>
    </svg>
  );
}

/* ============================================================
   THE EMPRESS (3) — Sufi Shahbanu on the throne
   RWS elements: throne, 12-star crown, pomegranate robe,
   wheat field, garden/forest, scepter, Venus symbol
   Sufi: Shahbanu on throne, eight-pointed star crown,
   pomegranate robe, wheat, Persian garden (cypress, water),
   scepter with Sufi ornament
   ============================================================ */
function ShahbanuVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sha-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="35%" stopColor="#0a3a2f" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="sha-glow" cx="0.5" cy="0.3" r="0.4">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sha-wheat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#937422" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="sha-throne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c481f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3a2e15" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#sha-bg)" />
      <rect width="200" height="300" fill="url(#sha-glow)" />

      {/* Persian garden behind — cypress trees */}
      <g opacity="0.25">
        {/* left cypress */}
        <path d="M30,200 L28,120 L32,120 L30,200 Z" fill="#1a4d3a" />
        <path d="M25,130 Q30,115 35,130" fill="#1a4d3a" opacity="0.6" />
        <path d="M24,145 Q30,130 36,145" fill="#1a4d3a" opacity="0.5" />
        <path d="M23,160 Q30,145 37,160" fill="#1a4d3a" opacity="0.4" />
        <path d="M23,175 Q30,160 37,175" fill="#1a4d3a" opacity="0.3" />
        {/* right cypress */}
        <path d="M170,200 L168,120 L172,120 L170,200 Z" fill="#1a4d3a" />
        <path d="M165,130 Q170,115 175,130" fill="#1a4d3a" opacity="0.6" />
        <path d="M164,145 Q170,130 176,145" fill="#1a4d3a" opacity="0.5" />
        <path d="M163,160 Q170,145 177,160" fill="#1a4d3a" opacity="0.4" />
        <path d="M163,175 Q170,160 177,175" fill="#1a4d3a" opacity="0.3" />
        {/* middle trees */}
        <path d="M70,190 L68,140 L72,140 L70,190 Z" fill="#1a4d3a" opacity="0.5" />
        <path d="M65,150 Q70,135 75,150" fill="#1a4d3a" opacity="0.4" />
        <path d="M130,190 L128,140 L132,140 L130,190 Z" fill="#1a4d3a" opacity="0.5" />
        <path d="M125,150 Q130,135 135,150" fill="#1a4d3a" opacity="0.4" />
      </g>

      {/* waterfall / stream */}
      <g opacity="0.15">
        <path d="M85,160 Q90,180 85,210 Q80,240 85,270" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M115,160 Q110,180 115,210 Q120,240 115,270" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M100,165 Q95,190 100,220 Q105,250 100,275" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>

      {/* stars in sky */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="40" cy="30" r="0.8" />
        <circle cx="160" cy="35" r="1" />
        <circle cx="100" cy="20" r="0.6" />
      </g>

      {/* the throne */}
      <g>
        {/* throne back */}
        <rect x="65" y="100" width="70" height="100" fill="url(#sha-throne)" rx="3" />
        {/* throne top — ornate */}
        <path d="M60,105 Q100,90 140,105 L140,112 L60,112 Z" fill="url(#sha-throne)" />
        {/* throne arms */}
        <rect x="55" y="140" width="12" height="40" fill="url(#sha-throne)" rx="2" />
        <rect x="133" y="140" width="12" height="40" fill="url(#sha-throne)" rx="2" />
        {/* Sufi geometric pattern on throne back */}
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.15">
          <rect x="80" y="120" width="20" height="20" transform="rotate(45 90 130)" />
          <rect x="100" y="120" width="20" height="20" transform="rotate(45 110 130)" />
          <rect x="80" y="150" width="20" height="20" transform="rotate(45 90 160)" />
          <rect x="100" y="150" width="20" height="20" transform="rotate(45 110 160)" />
        </g>
      </g>

      {/* the Shahbanu — seated queen */}
      <g transform="translate(100,110)">
        {/* twelve-star crown */}
        <g opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const r = 7;
            return (
              <g key={i} transform={`translate(${Math.cos(a) * r},${-10 + Math.sin(a) * r * 0.5})`}>
                <path d="M0,-2 L0.5,-0.5 L2,0 L0.5,0.5 L0,2 L-0.5,0.5 L-2,0 L-0.5,-0.5 Z" fill="#D4AF37" />
              </g>
            );
          })}
          {/* crown base */}
          <path d="M-8,-10 Q0,-14 8,-10" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
        </g>

        {/* face */}
        <circle cx="0" cy="-5" r="5.5" fill="#D4AF37" opacity="0.55" />

        {/* pomegranate-patterned robe */}
        <path d="M-14,1 Q-18,25 -20,55 L20,55 Q18,25 14,1 Z"
          fill="#0a3a2f" opacity="0.5" stroke="#D4AF37" strokeWidth="0.3" />
        {/* pomegranate pattern on robe */}
        <g opacity="0.3">
          <circle cx="-8" cy="15" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="8" cy="15" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="0" cy="30" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="-8" cy="40" r="2" fill="#c44030" opacity="0.3" />
          <circle cx="8" cy="40" r="2" fill="#c44030" opacity="0.3" />
        </g>

        {/* right arm resting on throne arm */}
        <path d="M14,10 Q20,15 22,20" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
        {/* left arm holding scepter */}
        <path d="M-14,10 Q-18,15 -20,20" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />

        {/* scepter in left hand with Sufi ornament top */}
        <g transform="translate(-20,15)" opacity="0.5">
          <line x1="0" y1="5" x2="0" y2="-20" stroke="#D4AF37" strokeWidth="1.2" />
          {/* eight-pointed star scepter top */}
          <g transform="translate(0,-22)">
            <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#D4AF37" opacity="0.6" />
          </g>
        </g>
      </g>

      {/* Venus / heart symbol on cushion at her side */}
      <g transform="translate(60,185)" opacity="0.3">
        <circle r="6" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Sufi heart (eight-pointed star) instead of Venus */}
        <path d="M0,-3 L1,-1 L3,0 L1,1 L0,3 L-1,1 L-3,0 L-1,-1 Z" fill="#D4AF37" opacity="0.5" />
      </g>

      {/* golden wheat field at bottom */}
      <g transform="translate(0,240)">
        <line x1="0" y1="5" x2="200" y2="5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" />
        {Array.from({ length: 15 }).map((_, i) => {
          const x = 10 + i * 13;
          return (
            <g key={i} transform={`translate(${x},0)`} opacity="0.4">
              <line x1="0" y1="5" x2="0" y2="-12" stroke="url(#sha-wheat)" strokeWidth="0.8" />
              {/* wheat grains */}
              <ellipse cx="-1.5" cy="-5" rx="1" ry="1.5" fill="#D4AF37" opacity="0.4" />
              <ellipse cx="1.5" cy="-5" rx="1" ry="1.5" fill="#D4AF37" opacity="0.4" />
              <ellipse cx="-1.5" cy="-9" rx="0.8" ry="1.2" fill="#D4AF37" opacity="0.35" />
              <ellipse cx="1.5" cy="-9" rx="0.8" ry="1.2" fill="#D4AF37" opacity="0.35" />
            </g>
          );
        })}
      </g>

      {/* ground / earth */}
      <rect x="0" y="270" width="200" height="30" fill="#3a2e15" opacity="0.3" />
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
      <div className="sufi-watermark absolute inset-2 rounded-lg" />
      {/* inner decorative border frame */}
      <div className="pointer-events-none absolute inset-1 rounded-lg border border-gold-500/30" />

      {/* Sufi arch border pattern along top & bottom */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 40 60">
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.25">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={`t${i}`} d={`M${i * 8},1 L${i * 8},4 Q${i * 8 + 4},6 ${(i + 1) * 8},4 L${(i + 1) * 8},1`} />
          ))}
        </g>
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.25">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={`b${i}`} d={`M${i * 8},59 L${i * 8},56 Q${i * 8 + 4},54 ${(i + 1) * 8},56 L${(i + 1) * 8},59`} />
          ))}
        </g>
      </svg>

      <SufiOrnament size={80} className="animate-rotate-slow opacity-50" color="#D4AF37" />
      <div className="h-px w-12 gold-rule opacity-40" />
      <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-gold-400/50">Sufi Tarot</p>
      <p className="font-serif text-xs text-sage-300/40">蘇菲塔羅</p>
    </div>
  );
}
