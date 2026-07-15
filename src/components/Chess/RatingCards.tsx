import { useMemo } from 'react';
import { profile } from '../../data/profile';
import { makeProviders } from '../../lib/ratings/factory';
import { useRatings } from '../../hooks/useRatings';
import s from './Chess.module.css';

const LINKS: Record<string, string> = {
  'Lichess Blitz': `https://lichess.org/@/${profile.lichessHandle}`,
  'FIDE Standard': `https://ratings.fide.com/profile/${profile.fide.id}`,
};

export function RatingCards() {
  const providers = useMemo(() => makeProviders(profile), []);
  const { ref, ratings } = useRatings(providers);

  return (
    <div className={s.ratings} ref={ref} aria-live="polite">
      {providers.map((provider) => {
        const rating = ratings[provider.name];
        return (
          <a
            key={provider.name}
            className={s.ratingCard}
            href={LINKS[provider.name]}
            target="_blank"
            rel="noreferrer"
          >
            <span className={s.ratingTop}>
              <span className={s.ratingLabel}>{provider.name}</span>
              <span className={s.ratingArrow} aria-hidden>
                ↗
              </span>
            </span>
            <p className={s.ratingValue}>{rating ? rating.value : '—'}</p>
            {rating?.cached && <p className={s.ratingNote}>cached</p>}
          </a>
        );
      })}
    </div>
  );
}
