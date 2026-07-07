import s from './Education.module.css';

const ITEMS = [
  { title: 'Founder @ The Collective', years: '2025 — present', tag: 'Activity' },
  { title: 'Cambridge Top in the World — IGCSE Enterprise', years: '2021', tag: 'Award' },
  { title: 'CREST Gold Award', years: '2022', tag: 'Award' },
];

export function Education() {
  return (
    <section id="education" className={s.education}>
      <h2 className={s.heading}>Education</h2>
      <ul className={s.list}>
        {ITEMS.map((item) => (
          <li key={item.title} className={s.item}>
            <span className={s.tag}>{item.tag}</span>
            <span className={s.title}>{item.title}</span>
            <span className={s.years}>{item.years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
