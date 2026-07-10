import type { Piece } from '../../data/pieces';
import s from './Board.module.css';

type PlaqueProps = { piece: Piece | null };

export function Plaque({ piece }: PlaqueProps) {
  return (
    <div className={s.plaque} aria-live="polite">
      {piece ? (
        <>
          <p className={s.plaqueTag}>
            {piece.category} · {piece.square}
          </p>
          <h3 className={s.plaqueTitle}>{piece.title}</h3>
          <p className={s.plaqueStory}>{piece.story}</p>
        </>
      ) : (
        <p className={s.plaqueHint}>Select a piece to read its story.</p>
      )}
    </div>
  );
}
