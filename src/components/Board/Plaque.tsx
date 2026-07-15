import type { Piece } from '../../data/pieces';
import s from './Board.module.css';

type PlaqueProps = { piece: Piece | null; onOpenStory: () => void };

export function Plaque({ piece, onOpenStory }: PlaqueProps) {
  return (
    <div className={s.plaque} aria-live="polite">
      {piece ? (
        <>
          <p className={s.plaqueTag}>
            <span>{piece.category}</span>
            <span className={s.plaqueSquare}>{piece.square}</span>
          </p>
          <div className={s.plaqueHead}>
            <span className={s.plaqueGlyph} aria-hidden>
              {piece.glyph}
            </span>
            <h3 className={s.plaqueTitle}>{piece.title}</h3>
          </div>
          <button type="button" className={s.demo} onClick={onOpenStory} aria-label="Watch demo">
            <span className={s.demoPlay} aria-hidden>
              ▶
            </span>
            <span className={s.demoCaption} aria-hidden>
              demo · 0:42
            </span>
            <span className={s.demoDots} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
          <p className={s.plaqueStory}>{piece.story}</p>
          <button type="button" className={s.plaqueMore} onClick={onOpenStory}>
            open the full story ↗
          </button>
        </>
      ) : (
        <p className={s.plaqueHint}>Select a piece to read its story.</p>
      )}
    </div>
  );
}
