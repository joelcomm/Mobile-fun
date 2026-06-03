/* markets.js — Seed market data for Oracle prediction market.
   Each market has a starting probability (0..1) used to initialize the
   LMSR liquidity pool the first time it's seen. After that, prices live
   in localStorage and move as the player trades. */
const MARKETS = [
  {
    id: 'btc-200k-2026',
    cat: 'Crypto',
    q: 'Will Bitcoin trade above $200,000 before 2027?',
    desc: 'Resolves YES if BTC/USD prints $200k or higher on any major exchange before Jan 1, 2027.',
    close: 'Dec 31, 2026',
    p: 0.34,
    vol: 184200
  },
  {
    id: 'eth-flip-btc',
    cat: 'Crypto',
    q: 'Will Ethereum’s market cap pass Bitcoin’s by end of 2026?',
    desc: 'The long-rumored "flippening." Resolves YES if ETH market cap exceeds BTC at any point in 2026.',
    close: 'Dec 31, 2026',
    p: 0.08,
    vol: 52100
  },
  {
    id: 'agi-declared-2026',
    cat: 'Tech',
    q: 'Will a major AI lab publicly claim AGI in 2026?',
    desc: 'Resolves YES if OpenAI, Google DeepMind, Anthropic, or Meta officially declares it has achieved AGI.',
    close: 'Dec 31, 2026',
    p: 0.21,
    vol: 98700
  },
  {
    id: 'apple-foldable',
    cat: 'Tech',
    q: 'Will Apple announce a foldable iPhone in 2026?',
    desc: 'Resolves YES if Apple officially unveils a foldable iPhone product at any event in 2026.',
    close: 'Dec 31, 2026',
    p: 0.27,
    vol: 41300
  },
  {
    id: 'spacex-mars',
    cat: 'Science',
    q: 'Will SpaceX launch an uncrewed Starship toward Mars in 2026?',
    desc: 'Resolves YES if a Starship departs Earth orbit on a Mars trajectory during the 2026 transfer window.',
    close: 'Dec 31, 2026',
    p: 0.44,
    vol: 76500
  },
  {
    id: 'fed-cut-summer',
    cat: 'Economy',
    q: 'Will the Fed cut rates at its July 2026 meeting?',
    desc: 'Resolves YES if the FOMC lowers the federal funds target range at the July 2026 meeting.',
    close: 'Jul 29, 2026',
    p: 0.58,
    vol: 132000
  },
  {
    id: 'sp500-7000',
    cat: 'Economy',
    q: 'Will the S&P 500 close above 7,000 in 2026?',
    desc: 'Resolves YES if the S&P 500 index has any daily close at or above 7,000 during 2026.',
    close: 'Dec 31, 2026',
    p: 0.49,
    vol: 88900
  },
  {
    id: 'wc-2026-usa',
    cat: 'Sports',
    q: 'Will the USA reach the 2026 World Cup quarterfinals?',
    desc: 'Co-hosts of the 2026 tournament. Resolves YES if the USMNT advances to the quarterfinal round.',
    close: 'Jul 19, 2026',
    p: 0.31,
    vol: 211400
  },
  {
    id: 'lakers-champ',
    cat: 'Sports',
    q: 'Will the Lakers win the 2026 NBA Championship?',
    desc: 'Resolves YES if the Los Angeles Lakers win the 2026 NBA Finals.',
    close: 'Jun 30, 2026',
    p: 0.12,
    vol: 64800
  },
  {
    id: 'gta6-2026',
    cat: 'Pop Culture',
    q: 'Will Grand Theft Auto VI release in 2026?',
    desc: 'Resolves YES if Rockstar ships GTA VI to consumers at any point during 2026.',
    close: 'Dec 31, 2026',
    p: 0.63,
    vol: 156300
  },
  {
    id: 'taylor-tour',
    cat: 'Pop Culture',
    q: 'Will Taylor Swift announce a new world tour in 2026?',
    desc: 'Resolves YES if a new headline world tour is officially announced during 2026.',
    close: 'Dec 31, 2026',
    p: 0.55,
    vol: 47200
  },
  {
    id: 'oscar-ai-film',
    cat: 'Pop Culture',
    q: 'Will a film using generative AI win an Oscar in 2027?',
    desc: 'Resolves YES if a film publicly acknowledged to use generative AI wins any Academy Award at the 2027 ceremony.',
    close: 'Mar 15, 2027',
    p: 0.18,
    vol: 33600
  },
  {
    id: 'room-temp-supercon',
    cat: 'Science',
    q: 'Will a room-temperature superconductor be independently confirmed by 2027?',
    desc: 'Resolves YES if a peer-reviewed, independently replicated room-temp ambient-pressure superconductor is confirmed before 2027.',
    close: 'Dec 31, 2026',
    p: 0.06,
    vol: 29100
  },
  {
    id: 'hottest-year',
    cat: 'Science',
    q: 'Will 2026 be recorded as the hottest year on record?',
    desc: 'Resolves YES if NASA or NOAA records 2026 as the warmest year in the global temperature record.',
    close: 'Jan 31, 2027',
    p: 0.47,
    vol: 58400
  },
  {
    id: 'tiktok-ban-usa',
    cat: 'Politics',
    q: 'Will TikTok be banned or force-sold in the US in 2026?',
    desc: 'Resolves YES if TikTok is banned from US app stores or ByteDance divests its US operations during 2026.',
    close: 'Dec 31, 2026',
    p: 0.38,
    vol: 119500
  },
  {
    id: 'self-driving-10-cities',
    cat: 'Tech',
    q: 'Will robotaxis operate in 10+ US cities by end of 2026?',
    desc: 'Resolves YES if driverless commercial robotaxi services run in at least 10 distinct US metro areas in 2026.',
    close: 'Dec 31, 2026',
    p: 0.41,
    vol: 44700
  }
];
