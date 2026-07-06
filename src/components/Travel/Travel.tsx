import s from './Travel.module.css';

const FEATURED = ['Singapore', 'India', 'Japan', 'United States', 'United Kingdom', 'France'];

export function Travel() {
  return (
    <section id="travel" className={s.travel}>
      <h2 className={s.heading}>41 countries and counting</h2>
      <div className={s.chips}>
        {FEATURED.map((country) => (
          <span key={country} className={s.chip}>
            {country}
          </span>
        ))}
        <span className={s.chip}>+35 more</span>
      </div>
      <div className={s.globePlaceholder} role="img" aria-label="Interactive globe coming soon" />
    </section>
  );
}
