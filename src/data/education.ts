export type EduItem = {
  key: string;
  school: 'nus' | 'uwc';
  kind: 'activity' | 'award';
  title: string;
  years: string;
  detail: string;
};

export const eduItems: EduItem[] = [
  {
    key: 'collective',
    school: 'nus',
    kind: 'activity',
    title: 'Founder @ The Collective',
    years: '2025 — present',
    detail:
      'A student community connecting builders across faculties — weekly maker nights, demo days.',
  },
  {
    key: 'cambridge',
    school: 'uwc',
    kind: 'award',
    title: 'Cambridge Top in the World — IGCSE Enterprise',
    years: '2021',
    detail: 'Highest mark globally in the IGCSE Enterprise examination.',
  },
  {
    key: 'crest',
    school: 'uwc',
    kind: 'award',
    title: 'CREST Gold Award',
    years: '2022',
    detail: 'Gold-level recognition for an independent research project.',
  },
];
