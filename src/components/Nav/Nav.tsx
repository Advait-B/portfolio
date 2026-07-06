import s from './Nav.module.css';

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#board', label: 'THE BOARD' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#now', label: 'NOW' },
  { href: '#travel', label: 'TRAVEL' },
  { href: '#chess', label: 'CHESS' },
  { href: '#contact', label: 'CONTACT' },
];

export function Nav() {
  return (
    <nav className={s.nav}>
      <a href="#home" className={s.brand}>
        ♞ Advait Bagri
      </a>
      <div className={s.links}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
