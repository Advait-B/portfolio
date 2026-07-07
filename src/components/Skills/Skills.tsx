import s from './Skills.module.css';

const SKILLS = [
  'React',
  'TypeScript',
  'C++',
  'Data Structures & Algorithms',
  'Chess Strategy',
  'Robotics',
  'Public Speaking',
];

export function Skills() {
  return (
    <div className={s.skills}>
      <span className={s.label}>SKILLS</span>
      <div className={s.track}>
        <span className={s.group}>
          {SKILLS.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </span>
        <span className={s.group} aria-hidden>
          {SKILLS.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
