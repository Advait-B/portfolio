import type { SquareVM } from '../../lib/fen';
import s from './Chess.module.css';

export function MiniBoard({ squares }: { squares: SquareVM[] }) {
  return (
    <div className={s.miniGrid} role="img" aria-label="Chess position">
      {squares.map((sq) => (
        <div key={sq.id} className={`${s.miniSquare} ${sq.dark ? s.dark : s.light}`}>
          {sq.glyph}
        </div>
      ))}
    </div>
  );
}
