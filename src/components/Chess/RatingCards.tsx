import { useMemo } from 'react';
import { profile } from '../../data/profile';
import { makeProviders } from '../../lib/ratings/factory';
import { useRatings } from '../../hooks/useRatings';
import s from './Chess.module.css';

const META: Record<string, { label: string; handle: string; href: string; sub: string }> = {
  'FIDE Standard': {
    label: 'FIDE',
    handle: 'ratings.fide.com',
    href: `https://ratings.fide.com/profile/${profile.fide.id}`,
    sub: 'classical · CM · SGP',
  },
  'Lichess Blitz': {
    label: 'LICHESS',
    handle: `@${profile.lichessHandle}`,
    href: `https://lichess.org/@/${profile.lichessHandle}`,
    sub: 'blitz',
  },
};

export function RatingCards() {
  const providers = useMemo(() => makeProviders(profile), []);
  const { ref, ratings } = useRatings(providers);

  return (
    <div className={s.ratings} ref={ref} aria-live="polite">
      {providers.map((provider, i) => {
        const meta = META[provider.name];
        const rating = ratings[provider.name];
        return (
          <a
            key={provider.name}
            className={`${s.ratingCard} ${i === 0 ? s.ratingCardFeatured : ''}`}
            href={meta.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className={s.ratingTop}>
              <span className={s.ratingLabel}>{meta.label}</span>
              <span className={s.ratingHandle}>
                {meta.handle} <span aria-hidden>↗</span>
              </span>
            </span>
            <p className={s.ratingValue}>{rating ? rating.value : '—'}</p>
            <p className={s.ratingNote}>{meta.sub}</p>
            {rating?.cached && <p className={s.ratingNote}>cached</p>}
          </a>
        );
      })}
      <a
        className={s.ratingCard}
        href={`https://www.chess.com/member/${profile.chesscom.handle}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className={s.ratingTop}>
          <span className={s.ratingLabel}>CHESS.COM</span>
          <span className={s.ratingHandle}>
            @{profile.chesscom.handle} <span aria-hidden>↗</span>
          </span>
        </span>
        <p className={s.ratingValue}>{profile.chesscom.blitz}</p>
        <p className={s.ratingNote}>blitz · {profile.chesscom.rapid} rapid</p>
      </a>
    </div>
  );
}
