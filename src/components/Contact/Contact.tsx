import { Sparkle } from '../Sparkle/Sparkle';
import s from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={s.contact}>
      <Sparkle glyph="✳" size={44} spin={28} style={{ top: '14%', left: '18%' }} />
      <Sparkle glyph="♘" size={30} style={{ top: '18%', right: '16%' }} />
      <Sparkle glyph="✦" size={16} spin={22} style={{ top: '10%', right: '26%' }} />
      <h2 className={s.heading}>Your move.</h2>
      <div className={s.links}>
        <a className={s.link} href="mailto:signups.advait@gmail.com">
          signups.advait@gmail.com
        </a>
        <a className={s.link} href="https://github.com/Advait-B">
          github.com/Advait-B
        </a>
        <a className={s.link} href="https://linkedin.com/in/advait-bagri">
          linkedin.com/in/advait-bagri
        </a>
      </div>
      <p className={s.footer}>© 2026 Advait Bagri · designed &amp; hand-coded from scratch · 1–0</p>
    </section>
  );
}
