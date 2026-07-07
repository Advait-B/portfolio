import { Sparkle } from '../Sparkle/Sparkle';
import s from './Hero.module.css';

export function Hero() {
  return (
    <section id="home" className={s.hero}>
      <Sparkle glyph="✳" size={40} style={{ top: '18%', left: '8%' }} />
      <Sparkle glyph="♞" size={32} spin={34} style={{ top: '65%', right: '10%' }} />
      <Sparkle glyph="✦" size={26} spin={20} style={{ bottom: '12%', left: '20%' }} />
      <h1 className={s.headline}>Advait Bagri</h1>
      <svg className={s.squiggle} viewBox="0 0 240 20" aria-hidden focusable="false">
        <path
          d="M2 14 C 30 2, 50 2, 70 14 S 110 26, 130 14 S 170 2, 190 14 S 220 22, 238 12"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <p className={s.tagline}>Builder, chess player, engineer.</p>
    </section>
  );
}
