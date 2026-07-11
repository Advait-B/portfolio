import { useState } from 'react';
import { eduItems } from '../../data/education';
import { StoryDialog } from '../StoryDialog/StoryDialog';
import s from './Education.module.css';

export function Education() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = eduItems.find((item) => item.key === selectedKey) ?? null;

  return (
    <section id="education" className={s.education}>
      <h2 className={s.heading}>Education</h2>
      <ul className={s.list}>
        {eduItems.map((item) => (
          <li key={item.key} className={s.item}>
            <button type="button" className={s.itemButton} onClick={() => setSelectedKey(item.key)}>
              <span className={s.tag}>{item.kind}</span>
              <span className={s.title}>{item.title}</span>
              <span className={s.years}>{item.years}</span>
            </button>
          </li>
        ))}
      </ul>
      <StoryDialog open={selected !== null} onClose={() => setSelectedKey(null)}>
        {selected && (
          <>
            <p className={s.dialogTag}>
              {selected.kind} · {selected.years}
            </p>
            <h3 className={s.dialogTitle}>{selected.title}</h3>
            <p className={s.dialogDetail}>{selected.detail}</p>
          </>
        )}
      </StoryDialog>
    </section>
  );
}
