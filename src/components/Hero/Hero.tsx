import { Sparkle } from '../Sparkle/Sparkle';
import s from './Hero.module.css';

export function Hero() {
  return (
    <section id="home" className={s.hero}>
      <Sparkle glyph="✳" size={40} style={{ top: '18%', left: '8%' }} />
      <Sparkle glyph="✳" size={32} spin={34} style={{ top: '14%', right: '12%' }} />
      <Sparkle glyph="✦" size={26} spin={20} style={{ bottom: '12%', left: '20%' }} />

      <p className={s.eyebrow}>Computer Engineer · Candidate Master · Singapore</p>
      <h1 className={s.headline}>
        I think in moves —
        <br />
        then I build them.
      </h1>
      <svg className={s.squiggle} viewBox="0 0 240 20" aria-hidden focusable="false">
        <path
          d="M2 14 C 30 2, 50 2, 70 14 S 110 26, 130 14 S 170 2, 190 14 S 220 22, 238 12"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <p className={s.tagline}>
        I'm Advait — a Computer Engineering student at NUS who builds robots, plays chess for
        Singapore, and has crossed 40+ borders doing both. My whole life fits on a chessboard.
        See for yourself.
      </p>

      <div className={s.ctas}>
        <a className={s.ctaPrimary} href="#board">
          explore the board ↓
        </a>
        <a className={s.ctaSecondary} href="/portfolio/resume.pdf" target="_blank" rel="noreferrer">
          download résumé (pdf)
        </a>
      </div>
    </section>
  );
}
