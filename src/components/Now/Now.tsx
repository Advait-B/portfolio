import s from './Now.module.css';

const ITEMS = [
  {
    label: 'Building',
    title: "Alex's autonomous navigation stack",
    detail:
      'Waypoint navigation, obstacle avoidance and live telemetry — built during my Stanford exchange year.',
  },
  {
    label: 'Learning',
    title: 'ROS 2 & SLAM',
    detail: "Working through the Nav2 stack and mapping the lab with Alex's own sensors as the test rig.",
  },
  {
    label: 'Playing',
    title: 'Rapid season & the Catalan',
    detail: 'Preparing for the next national qualifier — deep in Catalan theory between lab sessions.',
  },
];

export function Now() {
  return (
    <section id="now" className={s.now}>
      <div className={s.top}>
        <div className={s.kicker}>
          <span className={s.dot} aria-hidden />
          <span>Now</span>
        </div>
        <span className={s.updated}>Updated July 2026</span>
      </div>
      <h2 className={s.heading}>The position on the board today.</h2>
      <div className={s.grid}>
        {ITEMS.map((item) => (
          <div key={item.label} className={s.card}>
            <p className={s.cardLabel}>{item.label}</p>
            <h3 className={s.cardTitle}>{item.title}</h3>
            <p className={s.cardDetail}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
