import s from './Board.module.css';

export function Board() {
  return (
    <section id="board" className={s.board}>
      <h2 className={s.heading}>The Board</h2>
      <p className={s.note}>An interactive piece-by-piece story — coming soon.</p>
    </section>
  );
}
