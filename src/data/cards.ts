export type Orientation = 'upright' | 'reversed';

export type SuitId = 'major' | 'staffs' | 'cups' | 'swords' | 'coins';

export type LifeArea = '感情' | '事業' | '財務' | '親情' | '健康';

export interface Suit {
  id: SuitId;
  name: string;
  subtitle: string;
  description: string;
  element: string;
  symbol: string;
  accent: string; // tailwind color base, e.g. 'gold'
  count: number;
}

export interface CardMeaning {
  philosophy: string;
  definition: string;
  keywords: string[];
}

export interface CardData {
  id: string;
  number: string;
  name: string;
  sufiName: string;
  suitId: SuitId;
  upright: CardMeaning;
  reversed: CardMeaning;
  guidance: Record<LifeArea, { upright: string; reversed: string }>;
}

export const SUITS: Suit[] = [
  {
    id: 'major',
    name: '大阿卡納',
    subtitle: 'Major Arcana',
    description: '靈性之旅的核心二十二張，揭示靈魂從啟蒙到覺醒的完整旅程。',
    element: '宇宙',
    symbol: '✦',
    accent: 'gold',
    count: 22,
  },
  {
    id: 'staffs',
    name: '權杖',
    subtitle: 'Staffs',
    description: '火元素之牌，象徵熱情、行動力、創造力與意志的燃燒。',
    element: '火',
    symbol: '⟡',
    accent: 'emerald',
    count: 14,
  },
  {
    id: 'cups',
    name: '聖杯',
    subtitle: 'Cups',
    description: '水元素之牌，映照情感、直覺、愛與心靈深處的流動。',
    element: '水',
    symbol: '❂',
    accent: 'emerald',
    count: 14,
  },
  {
    id: 'swords',
    name: '寶劍',
    subtitle: 'Swords',
    description: '風元素之牌，代表思維、挑戰、真相與心智的鋒利切割。',
    element: '風',
    symbol: '✧',
    accent: 'gold',
    count: 14,
  },
  {
    id: 'coins',
    name: '星幣',
    subtitle: 'Coins',
    description: '土元素之牌，關乎物質、豐盛、身體與大地的扎根顯化。',
    element: '土',
    symbol: '◈',
    accent: 'emerald',
    count: 14,
  },
];

// ---- Mock content for two cards ----

const magicianGuidance = (
  base: string,
  reversed: string,
): Record<LifeArea, { upright: string; reversed: string }> => ({
  感情: {
    upright:
      `在感情中，你此刻擁有創造連結的全部力量。${base}問自己：我是否願意成為這段關係的主動鑄造者，而非被動等待者？蘇菲教導——愛是一面鏡子，當你將內在的神聖品質向外投射，對方亦會以真實回應。此刻你的心是點燃的火種，請以誠實為黏土，以傾聽為刻刀，塑造你渴望的親密。`,
    reversed:
      reversed + '感情中可能出現的是操縱而非連結——你是否正以「技巧」取代真心？停下來，讓一次毫無目的的相處，重新點燃那個最初的火種。',
  },
  事業: {
    upright:
      `事業上，你手握將構想化為現實的煉金術。${base}這不是等待機會的時刻，而是主動編織的時刻。蘇菲行者知道：工具是中性的，賦予其方向的是你的「意圖」（Niyah）。請清晰寫下你未來三個月的事業祈願，然後讓每日的行動成為對這個祈願的回應。`,
    reversed:
      reversed + '你或許正以過多的計算掩蓋了真正的使命。回到一個問題：這份事業是否服務於比我更大的事物？',
  },
  財務: {
    upright:
      `財務的顯化之門已開啟。${base}你擁有將資源轉化的能力，但蘇菲智慧提醒：豐盛不是囤積，而是流動。問自己——我所創造的財富，是否也滋養了他人與大地？當金錢帶著給予的意圖流動，它會以倍數回流。`,
    reversed:
      reversed + '對金錢的焦慮可能正讓你錯失真正的機會。檢視：是匮乏在驅動你的決定，還是信任？',
  },
  親情: {
    upright:
      `家庭關係中，你可以是那個轉化者。${base}許多家族模式代代相傳，而你此刻擁有打破舊有咒語的力量。蘇菲導師說：「一個覺醒的人，能療癒七代祖先與七代後裔。」你的清醒覺察與溫柔表達，正是整個家族等待的那道光。`,
    reversed:
      reversed + '你是否正以「幫助」之名操控家人的選擇？真正的愛給予自由，包括讓對方犯錯的自由。',
  },
  健康: {
    upright:
      `你的身體此刻響應你的意志。${base}蘇菲視身體為靈魂的廟宇，四元素（火、水、風、土）在你的肉身中流動。這是啟動新健康儀式的絕佳時機——一個每日的呼吸練習、一段晨間的行走冥想，都將成為轉化身心的煉金術。`,
    reversed:
      reversed + '過度用力可能正在消耗你的根基。真正的力量包括休息的智慧——今晚，允許自己什麼都不成就。',
  },
});

const aceStaffsGuidance = (
  base: string,
  reversed: string,
): Record<LifeArea, { upright: string; reversed: string }> => ({
  感情: {
    upright:
      `一種新的熱情正在你的心輪點燃。${base}這可能是初見時的火花，也可能是長期關係中重新甦醒的渴望。蘇菲詩人魯米說：「有一束光，從你心中通往宇宙。」問自己：這股熱情是否指向真實的連結，還是僅是我對「感覺活著」的渴望？分辨清楚，然後勇敢前行。`,
    reversed:
      reversed + '熱情可能在燃燒過快——檢視這股火焰是來自內在的充盈，還是來自匮乏的追逐？給它一點時間，讓它從燃燒沉澱為溫暖。',
  },
  事業: {
    upright:
      `一個點亮靈感的事業構想正在降臨。${base}權杖王牌是火種，不是整場大火——你的任務是守護它、為它添柴。蘇菲教導：「一滴水如何不乾涸？讓它流入河流。」你的靈感需要行動的河流。今天寫下第一個具體步驟，明天完成它，讓火種成為火焰。`,
    reversed:
      reversed + '靈感閃現後的遲疑正在讓火種冷卻。不需要完美的計畫，只需要第一個不完美的行動。',
  },
  財務: {
    upright:
      `財務的新動能已經出現。${base}也許是一個新的收入來源、一個投資靈感、或一個讓技能變現的契機。蘇菲的豐盛觀在於——當你與內在的熱情對齊，物質世界會以奇妙的方式響應。問自己：這個機會是否讓我感到興奮且踏實？若是，勇敢接下這根權杖。`,
    reversed:
      reversed + '衝動的財務決定可能來自「點火」的興奮而非清醒的判斷。讓這股熱情沉睡一晚，明日清晨再問一次。',
  },
  親情: {
    upright:
      `家庭中出現一個重新點燃熱情的契機。${base}也許是一個久違的相聚、一個想共同展開的計畫、或一個想修復的關係。權杖王牌說：你擁有主動權。做那個伸出手的人——蘇菲相信，主動的善意是最高級的祈禱。`,
    reversed:
      reversed + '家庭中的熱情可能正以爭執的形式表現。在回應之前，先問：我此刻的火，是為了連結還是為了勝利？',
  },
  健康: {
    upright:
      `你的生命能量正在回升。${base}這是啟動新健康習慣的完美時機——身體渴望運動、渴望陽光、渴望被使用。蘇菲的「Sema」（旋轉舞）教導我們：當身體隨內在節奏律動，靈魂亦被喚醒。找到一個讓你感到「活著」的身體活動，從今天開始。`,
    reversed:
      reversed + '能量可能正以焦慮或失眠的形式過度燃燒。讓今日成為一個「收火」的日子——溫熱的湯、緩慢的呼吸、早早的入睡。',
  },
});

export const CARDS: CardData[] = [
  {
    id: 'magician',
    number: '1',
    name: '魔術師',
    sufiName: 'Al-Hakim（智慧者）',
    suitId: 'major',
    upright: {
      philosophy:
        '魔術師對應蘇菲路徑中的「神聖意志」。造物主賦予人四種工具——火（權杖）、水（聖杯）、風（寶劍）、土（星幣），而人的靈性功課，是將這四元素統合於一個更高的意圖之下。在蘇菲教導中，這就是「Niyah」（純淨的意圖）：當你的一念與神聖意志對齊，天與地便在你手中交會。',
      definition:
        '魔術師牌象徵顯化、意志力與主動創造。你具備所有所需的工具與資源，此刻是將構想化為現實的時刻。正位時，提醒你認清自己的力量、清晰你的意圖、並採取行動。這是一張「上方如是，下方亦然」的牌——靈性與物質在你之中合一。',
      keywords: ['顯化', '意志', '創造', '主動', '技藝'],
    },
    reversed: {
      philosophy:
        '逆位的魔術師揭示「分離的幻覺」——當人遺忘力量的源頭，工具便從「服務」淪為「操控」。蘇菲導師警告：未經淨化的意志，會讓人成為自我的囚徒。此時的功課不是增加力量，而是回到謙卑，重新將意志交託於更高的指引。',
      definition:
        '逆位時，魔術師指向操縱、欺騙、或才能的誤用。可能是你在使用技巧而非真心，或以意志強行控制本該自然流動的事物。也可能是自我懷疑、未發揮的潛能。這是一個停下來反思「我為何而做」的時刻。',
      keywords: ['操縱', '誤用', '未發揮', '幻覺', '自我'],
    },
    guidance: magicianGuidance(
      '魔術師提醒你：你擁有顯化的力量。',
      '逆位的訊息是——',
    ),
  },
  {
    id: 'ace-of-staffs',
    number: '王牌',
    name: '權杖王牌',
    sufiName: 'Nūr al-Nār（火之最初光芒）',
    suitId: 'staffs',
    upright: {
      philosophy:
        '權杖王牌對應蘇菲的「神聖火花」——造物主從自身之光引燃創造的第一束火焰。在人的生命旅途中，這是一個靈感降臨、熱情甦醒、使命被點燃的時刻。蘇菲詩人魯米說：「你尋找的火種，正在你之內。」這張牌提醒你認出那個剛剛升起的光，並為它築一個可以燃燒的爐灶。',
      definition:
        '權杖王牌象徵新的熱情、靈感、活力與創造衝動。一個新的構想、機會或冒險正在你的生命中點燃。正位時，鼓勵你抓住這股能量、勇敢行動、讓火種成為火焰。這是行動牌組的開端，提醒你：一切都從一個燃燒的「是」開始。',
      keywords: ['熱情', '靈感', '新開始', '活力', '勇氣'],
    },
    reversed: {
      philosophy:
        '逆位的火之光芒指向「延遲的點燃」或「過早的燃盡」。蘇菲教導：火需要適當的空間與柴薪。當靈感來臨卻未被行動跟隨，火種會冷卻；當熱情過猛而無節制，火焰會灼傷自身。此時的功課是辨識——是該添柴，還是該收火？',
      definition:
        '逆位時，權杖王牌指向熱情的消減、靈感的遲滯、或衝動的誤用。可能是一個構想遲遲未能落地，或是熱情來得快去得也快。也可能是過度燃燒導致的疲憊。問自己：我的火此刻需要被點燃，還是需要被節制？',
      keywords: ['遲滯', '消減', '衝動', '疲憊', '未落地'],
    },
    guidance: aceStaffsGuidance(
      '權杖王牌帶來一束新的火光。',
      '逆位的訊息是——',
    ),
  },
];
