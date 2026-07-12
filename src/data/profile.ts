export const profile = {
  lichessHandle: 'mango_madness',
  // cached fallback if the live Lichess fetch fails — last verified 2026-07-12
  lichessFallback: 2538,
  fide: {
    id: '5820391',
    title: 'Candidate Master (CM)',
    standard: 2118,
    rapid: 2039,
    blitz: 1984,
    verified: '2026-07-12',
  },
};

export type Profile = typeof profile;
