import { useState } from 'react';
import { eduItems } from '../../data/education';
import { moduleGroups } from '../../data/modules';
import { StoryDialog } from '../StoryDialog/StoryDialog';
import { ModuleList } from './ModuleList';
import s from './Education.module.css';

const SCHOOLS = [
  { school: 'nus', name: 'National University of Singapore' },
  { school: 'uwc', name: 'UWC South East Asia' },
] as const;

export function Education() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = eduItems.find((item) => item.key === selectedKey) ?? null;

  return (
    <section id="education" className={s.education}>
      <h2 className={s.heading}>Education</h2>
      {SCHOOLS.map(({ school, name }) => (
        <div key={school} className={s.card}>
          <h3 className={s.schoolName}>{name}</h3>
          <ul className={s.list}>
            {eduItems
              .filter((item) => item.school === school)
              .map((item) => (
                <li key={item.key} className={s.item}>
                  <button
                    type="button"
                    className={s.itemButton}
                    onClick={() => setSelectedKey(item.key)}
                  >
                    <span className={s.tag}>{item.kind}</span>
                    <span className={s.title}>{item.title}</span>
                    <span className={s.years}>{item.years}</span>
                  </button>
                </li>
              ))}
          </ul>
          <ModuleList groups={moduleGroups.filter((g) => g.school === school)} />
        </div>
      ))}
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
