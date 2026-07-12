import { useEffect, useState } from 'react';
import type { Rating, RatingProvider } from '../lib/ratings/provider';
import { useInView } from './useInView';

export function useRatings(providers: RatingProvider[]) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [ratings, setRatings] = useState<Record<string, Rating>>({});

  useEffect(() => {
    if (!inView) return;
    providers.forEach((provider) => {
      provider
        .fetch()
        .then((value) =>
          setRatings((prev) => ({ ...prev, [provider.name]: { value, cached: false } })),
        )
        .catch(() =>
          setRatings((prev) => ({
            ...prev,
            [provider.name]: { value: provider.fallback, cached: true },
          })),
        );
    });
  }, [inView, providers]);

  return { ref, ratings };
}
