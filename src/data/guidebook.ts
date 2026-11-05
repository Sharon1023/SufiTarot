export interface SpreadPosition {
  position: number;
  label: string;
  meaning: string;
}

export interface Spread {
  id: string;
  name: string;
  subtitle: string;
  origin: string;
  description: string;
  positions: SpreadPosition[];
}

export const SPREADS: Spread[] = [
  {
    id: 'fal',
    name: '單牌啟示',
    subtitle: 'Fal · Fal-e Hafez',
    origin: '波斯，六百年傳統',
    description:
      'Fal 是流傳六百年的波斯古老占卜傳統，源自詩人哈菲茲的「Fal-e Hafez」。帶著一個明確的問題洗牌，抽出一張牌作為完整答案。允許後續追問。',
    positions: [
      { position: 1, label: '單牌', meaning: '帶著明確的問題洗牌，抽出一張牌——這張牌即是完整的回答。允許針對同一問題追問後續。' },
    ],
  },
  {
    id: 'three-cards',
    name: '三卡身心靈牌陣',
    subtitle: 'Three Cards · Mind-Body-Soul',
    origin: '蘇菲身心靈整合',
    description:
      '有別於傳統的「過去／現在／未來」，此牌陣由左至右水平排列，對應蘇菲的三重存在：理智、身體、靈魂。',
    positions: [
      { position: 1, label: '理智 Aql', meaning: '心智的狀態——你的思想、分析與邏輯層面此刻如何運作？' },
      { position: 2, label: '身體 Jism', meaning: '身體的狀態——你的肉身與物質處境給予你什麼訊息？' },
      { position: 3, label: '靈魂 Ruh', meaning: '靈魂的指引——你的內在靈性本質此刻渴望什麼？' },
    ],
  },
  {
    id: 'five-star',
    name: '蘇菲五角星牌陣',
    subtitle: 'Five Pointed Star · Sufi Pentagram',
    origin: '神聖之光與人的自然形態',
    description:
      '五角星象徵神聖之光與人的自然形態。六個位置分別對應頭、雙臂、雙腿與心——從理性的辨識走向心靈的解答。',
    positions: [
      { position: 1, label: '頭', meaning: '理智地辨識你當下的挑戰為何。' },
      { position: 2, label: '左臂', meaning: '此刻你需要「知道」什麼。' },
      { position: 3, label: '右臂', meaning: '此刻你需要「行動」什麼。' },
      { position: 4, label: '左腿', meaning: '未來你需要「知道」什麼。' },
      { position: 5, label: '右腿', meaning: '未來你需要「行動」什麼。' },
      { position: 6, label: '心', meaning: '來自心靈空間的誠摯解答與方案。' },
    ],
  },
];

export interface CourtCardNaming {
  traditional: string;
  sufiName: string;
  transliteration: string;
  description: string;
}

export const COURT_CARDS: CourtCardNaming[] = [
  {
    traditional: '侍者 Page',
    sufiName: '女兒 Daughter',
    transliteration: '—',
    description: '年輕、理想主義的女性面向。純真的初探者，帶著好奇與直覺進入該花色的能量。',
  },
  {
    traditional: '騎士 Knight',
    sufiName: '兒子 Son',
    transliteration: '—',
    description: '年輕、原始的男性表達。行動派的原動力，將該花色的能量以衝勁展現。',
  },
  {
    traditional: '皇后 Queen',
    sufiName: 'Malika',
    transliteration: 'Malika',
    description: '成熟的女性面向。內斂而深沉，以智慧與包容體現該花色的完整力量。',
  },
  {
    traditional: '國王 King',
    sufiName: 'Shah',
    transliteration: 'Shāh',
    description: '老練的男性顯化。權威與掌控，將該花色的能量以世俗王者的姿態穩固呈現。',
  },
];
