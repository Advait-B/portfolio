export type EduItem = {
  key: string;
  school: 'nus' | 'uwc';
  kind: 'activity' | 'award' | 'competition';
  title: string;
  years: string;
  detail: string;
};

export const eduItems: EduItem[] = [
  // NUS — activities
  {
    key: 'collective',
    school: 'nus',
    kind: 'activity',
    title: 'Founder @ The Collective',
    years: '2025 — present',
    detail:
      'A student community I started at NUS to connect builders across faculties — weekly maker nights, demo days, and a shared parts library.',
  },
  {
    key: 'orca',
    school: 'nus',
    kind: 'activity',
    title: 'President @ OrcaStrats',
    years: '2025 — present',
    detail:
      "Leading NUS's strategy-games society: running the internal league, coaching new players, and organising inter-college tournaments.",
  },
  {
    key: 'rc4e',
    school: 'nus',
    kind: 'activity',
    title: 'Operations Exec @ RC4 Entrepreneurship',
    years: '2025 — present',
    detail:
      "Running logistics and partnerships for RC4's startup community — speaker nights, pitch events and founder dinners.",
  },
  {
    key: 'chessteam',
    school: 'nus',
    kind: 'activity',
    title: "Varsity Chess Team — IFG'25 Champions",
    years: '2025',
    detail: 'Board 1 for the college team — an undefeated run to the Inter-Faculty Games title in 2025.',
  },
  {
    key: 'reversi',
    school: 'nus',
    kind: 'activity',
    title: "RC4 Reversi Team — ICG'25 Champions",
    years: '2025',
    detail: 'Turns out chess habits transfer: we took the Inter-College Games reversi title in our first season.',
  },
  // NUS — competitions
  {
    key: 'aihack',
    school: 'nus',
    kind: 'competition',
    title: 'NUS AI for Business Hackathon Finalist',
    years: '2026',
    detail:
      '48 hours to prototype an AI tool for retail demand forecasting — made the final six of 40+ teams.',
  },
  {
    key: 'ideate',
    school: 'nus',
    kind: 'competition',
    title: 'IDEATE Semi-Finalist',
    years: '2025',
    detail:
      'Pitched a modular hydroponics venture (grown out of Project 0) to a panel of VCs and faculty — reached the semi-finals.',
  },
  // UWC — activities
  {
    key: 'herjourney',
    school: 'uwc',
    kind: 'activity',
    title: 'Founder @ Her Journey',
    years: '2021 — 2023',
    detail:
      'A service initiative supporting migrant women in Singapore with weekly digital-literacy workshops, run for two years.',
  },
  {
    key: 'scisoc',
    school: 'uwc',
    kind: 'activity',
    title: 'Head @ Science Society',
    years: '2022 — 2023',
    detail: "Led the school's largest academic society — demo days, the annual science fair, and interschool quiz teams.",
  },
  {
    key: 'bluedragon',
    school: 'uwc',
    kind: 'activity',
    title: 'Vice Head @ Blue Dragon',
    years: '2021 — 2023',
    detail:
      "Fundraising and awareness arm for the Blue Dragon Children's Foundation in Vietnam — campaigns, trips, and a record fundraising year.",
  },
  {
    key: 'first',
    school: 'uwc',
    kind: 'activity',
    title: 'Safety Officer @ FIRST Robotics Club',
    years: '2020 — 2022',
    detail: 'Kept a 30-person build team safe through two competition seasons — and got plenty of drive-train time too.',
  },
  {
    key: 'p0lead',
    school: 'uwc',
    kind: 'activity',
    title: 'Co-Leader @ Project 0',
    years: '2022 — 2023',
    detail: 'The hydroponics project that later won a $1,000 grant — led the build team and the evolutionary-algorithm tuning.',
  },
  {
    key: 'mun',
    school: 'uwc',
    kind: 'activity',
    title: 'Chair @ MUN',
    years: '2022 — 2023',
    detail: 'Chaired committees at three conferences — fast thinking, procedure, and keeping forty delegates on topic.',
  },
  // UWC — awards
  {
    key: 'cambridge',
    school: 'uwc',
    kind: 'award',
    title: 'Cambridge Top in the World — IGCSE Enterprise',
    years: '2021',
    detail: 'Highest mark globally in the IGCSE Enterprise examination.',
  },
  {
    key: 'sinda',
    school: 'uwc',
    kind: 'award',
    title: 'SINDA Excellence Award',
    years: '2023',
    detail: 'Awarded for academic excellence in the IB — recognising the 45/45 diploma.',
  },
  {
    key: 'crest',
    school: 'uwc',
    kind: 'award',
    title: 'CREST Gold Award',
    years: '2022',
    detail: 'UK CREST Gold for an extended research project on sustainable hydroponic systems.',
  },
  {
    key: 'curtin',
    school: 'uwc',
    kind: 'award',
    title: 'Curtin Singapore Hackathon — 3rd Place',
    years: '2023',
    detail: 'Built and pitched a working prototype in 24 hours — third overall against university teams, while still in high school.',
  },
  {
    key: 'rookie',
    school: 'uwc',
    kind: 'award',
    title: 'FIRST Robotics Rookie Game Changer',
    years: '2021',
    detail: "Won in our team's first FRC season for the robot's novel game-piece mechanism.",
  },
];
