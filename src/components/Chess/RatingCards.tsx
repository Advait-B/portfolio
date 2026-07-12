import { useMemo } from 'react';
import { profile } from '../../data/profile';
import { makeProviders } from '../../lib/ratings/factory';
import { useRatings } from '../../hooks/useRatings';
import s from './Chess.module.css';

export function RatingCards() {
  const providers = useMemo(() => makeProviders(profile), []);
  const { ref, ratings } = useRatings(providers);

  return (
    <div className={s.ratings} ref={ref} aria-live="polite">
      {providers.map((provider) => {
        const rating = ratings[provider.name];
        return (
          <div key={provider.name} className={s.ratingCard}>
            <p className={s.ratingLabel}>{provider.name}</p>
            <p className={s.ratingValue}>{rating ? rating.value : '—'}</p>
            {rating?.cached && <p className={s.ratingNote}>cached</p>}
          </div>
        );
      })}
      <a
        className={s.fideLink}
        href={`https://ratings.fide.com/profile/${profile.fide.id}`}
        target="_blank"
        rel="noreferrer"
      >
        FIDE ID {profile.fide.id} · {profile.fide.title} →
      </a>
    </div>
  );
}
