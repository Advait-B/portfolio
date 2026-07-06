import s from './Now.module.css';

const ITEMS = [
  'Building this portfolio, hand-coded, in public.',
  'Studying Computer Engineering at NUS.',
  'Running The Collective, a builder community across faculties.',
];

export function Now() {
  return (
    <section id="now" className={s.now}>
      <h2 className={s.heading}>Now</h2>
      <ul className={s.list}>
        {ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
