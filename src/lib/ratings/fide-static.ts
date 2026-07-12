import type { RatingProvider } from './provider';

// FIDE has no public API — the rating is a static, manually verified number.
export function makeFideProvider(rating: number): RatingProvider {
  return {
    name: 'FIDE Standard',
    fallback: rating,
    async fetch() {
      return rating;
    },
  };
}
