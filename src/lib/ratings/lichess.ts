import type { RatingProvider } from './provider';

export function makeLichessProvider(handle: string, fallback: number): RatingProvider {
  return {
    name: 'Lichess Blitz',
    fallback,
    async fetch() {
      const res = await fetch(`https://lichess.org/api/user/${handle}`, {
        signal: AbortSignal.timeout(3000),
      });
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      return json.perfs.blitz.rating;
    },
  };
}
