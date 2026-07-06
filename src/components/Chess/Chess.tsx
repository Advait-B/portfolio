import s from './Chess.module.css';

export function Chess() {
  return (
    <section id="chess" className={s.chess}>
      <h2 className={s.heading}>Chess</h2>
      <p className={s.note}>Game replays and live ratings — coming soon.</p>
    </section>
  );
}
