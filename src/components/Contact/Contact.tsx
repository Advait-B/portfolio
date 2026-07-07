import { Sparkle } from '../Sparkle/Sparkle';
import s from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={s.contact}>
      <Sparkle glyph="✦" size={30} spin={30} style={{ top: '16%', right: '14%' }} />
      <h2 className={s.heading}>Contact</h2>
      <a className={s.link} href="mailto:signups.advait@gmail.com">
        signups.advait@gmail.com
      </a>
      <a className={s.link} href="https://github.com/Advait-B">
        github.com/Advait-B
      </a>
    </section>
  );
}
