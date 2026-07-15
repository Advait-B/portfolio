import { useMemo, useState } from 'react';
import { games } from '../../data/games';
import { movesToFens, fenToSquares } from '../../lib/fen';
import { MiniBoard } from './MiniBoard';
import { GameList } from './GameList';
import { RatingCards } from './RatingCards';
import s from './Chess.module.css';

export function Chess() {
  const [gameId, setGameId] = useState(games[0].id);
  const [ply, setPly] = useState(-1); // -1 = final position

  const game = games.find((g) => g.id === gameId)!;
  const fens = useMemo(() => movesToFens(game.moves), [game]);
  const total = fens.length - 1;
  const at = ply < 0 ? total : Math.min(ply, total);
  const squares = useMemo(() => fenToSquares(fens[at]), [fens, at]);

  function selectGame(id: string) {
    setGameId(id);
    setPly(-1);
  }

  return (
    <section id="chess" className={s.chess}>
      <p className={s.eyebrow}>The other board</p>
      <h2 className={s.heading}>Candidate Master, Singapore.</h2>
      <p className={s.note}>
        National representative. Find me over the board, or online most evenings — and below,
        three games I never get tired of replaying.
      </p>

      <RatingCards />

      <div className={s.layout}>
        <div className={s.gamesCol}>
          <p className={s.columnLabel}>Favourite games</p>
          <GameList games={games} selectedId={gameId} onSelect={selectGame} />
        </div>

        <div className={s.boardCol}>
          <MiniBoard squares={squares} />
          <div className={s.replayNav}>
            <button type="button" onClick={() => setPly(0)} aria-label="Start" disabled={at === 0}>
              ⏮
            </button>
            <button
              type="button"
              onClick={() => setPly(Math.max(0, at - 1))}
              disabled={at === 0}
              aria-label="Back"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={() => setPly(Math.min(total, at + 1))}
              disabled={at === total}
              aria-label="Forward"
            >
              ▶
            </button>
            <button
              type="button"
              onClick={() => setPly(-1)}
              aria-label="End"
              disabled={at === total}
            >
              ⏭
            </button>
          </div>
          <p className={s.caption} aria-live="polite">
            {at === 0
              ? 'start position'
              : `${Math.ceil(at / 2)}${at % 2 ? '. ' : '… '}${game.moves[at - 1]} · move ${at} of ${total}`}
          </p>
        </div>
      </div>
    </section>
  );
}
