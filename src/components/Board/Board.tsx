import { useReducer } from 'react';
import { pieces } from '../../data/pieces';
import { buildBoard } from '../../lib/board';
import { Plaque } from './Plaque';
import s from './Board.module.css';

type State = { selected: string | null };
type Action = { type: 'toggle'; square: string };

function reducer(state: State, action: Action): State {
  return { selected: state.selected === action.square ? null : action.square };
}

const squares = buildBoard(pieces);

export function Board() {
  const [state, dispatch] = useReducer(reducer, { selected: null });
  const selectedPiece = pieces.find((p) => p.square === state.selected) ?? null;

  return (
    <section id="board" className={s.board}>
      <h2 className={s.heading}>The Board</h2>
      <p className={s.note}>Click on a piece to open a story.</p>
      <div className={s.grid} role="grid" aria-label="Chess board">
        {squares.map((sq) => (
          <div key={sq.id} className={`${s.square} ${sq.dark ? s.dark : s.light}`}>
            {sq.piece && (
              <button
                type="button"
                className={s.piece}
                aria-pressed={state.selected === sq.piece.square}
                aria-label={`${sq.piece.title} — ${sq.piece.category} on ${sq.id}`}
                onClick={() => dispatch({ type: 'toggle', square: sq.piece!.square })}
              >
                {sq.piece.glyph}
              </button>
            )}
          </div>
        ))}
      </div>
      <Plaque piece={selectedPiece} />
    </section>
  );
}
