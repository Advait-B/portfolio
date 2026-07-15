import { useReducer } from 'react';
import { pieces } from '../../data/pieces';
import { buildBoard } from '../../lib/board';
import { Plaque } from './Plaque';
import { StoryDialog } from '../StoryDialog/StoryDialog';
import s from './Board.module.css';

type State = { selected: string | null; dialogOpen: boolean; mediaIndex: number };
type Action =
  | { type: 'toggle'; square: string }
  | { type: 'openStory' }
  | { type: 'closeStory' }
  | { type: 'nextMedia' }
  | { type: 'prevMedia' };

const initialState: State = { selected: null, dialogOpen: false, mediaIndex: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle':
      return state.selected === action.square
        ? initialState
        : { selected: action.square, dialogOpen: false, mediaIndex: 0 };
    case 'openStory':
      return { ...state, dialogOpen: true, mediaIndex: 0 };
    case 'closeStory':
      return { ...state, dialogOpen: false };
    case 'nextMedia':
    case 'prevMedia': {
      const piece = pieces.find((p) => p.square === state.selected);
      const total = piece?.media.length ?? 0;
      if (total === 0) return state;
      const step = action.type === 'nextMedia' ? 1 : -1;
      return { ...state, mediaIndex: (state.mediaIndex + step + total) % total };
    }
    default:
      return state;
  }
}

const squares = buildBoard(pieces);

export function Board() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const selectedPiece = pieces.find((p) => p.square === state.selected) ?? null;

  return (
    <section id="board" className={s.board}>
      <p className={s.eyebrow}>The board</p>
      <h2 className={s.heading}>Every piece has a story.</h2>
      <p className={s.note}>click any piece — the plaque updates</p>
      <div className={s.grid}>
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
      <Plaque piece={selectedPiece} onOpenStory={() => dispatch({ type: 'openStory' })} />
      <StoryDialog open={state.dialogOpen} onClose={() => dispatch({ type: 'closeStory' })}>
        {state.dialogOpen && selectedPiece && (
          <>
            <p className={s.plaqueTag}>
              {selectedPiece.category} · {selectedPiece.square}
            </p>
            <h3 className={s.plaqueTitle}>{selectedPiece.title}</h3>
            <p className={s.plaqueStory}>{selectedPiece.story}</p>
            {selectedPiece.media.length > 0 && (
              <>
                <div className={s.carousel}>
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => dispatch({ type: 'prevMedia' })}
                  >
                    ‹
                  </button>
                  <p aria-live="polite">{selectedPiece.media[state.mediaIndex]}</p>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={() => dispatch({ type: 'nextMedia' })}
                  >
                    ›
                  </button>
                </div>
                <p className={s.carouselCount}>
                  {state.mediaIndex + 1} / {selectedPiece.media.length}
                </p>
              </>
            )}
          </>
        )}
      </StoryDialog>
    </section>
  );
}
