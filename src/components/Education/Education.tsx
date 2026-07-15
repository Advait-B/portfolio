import { useState } from 'react';
import { eduItems } from '../../data/education';
import { moduleGroups } from '../../data/modules';
import { StoryDialog } from '../StoryDialog/StoryDialog';
import { ModuleList } from './ModuleList';
import s from './Education.module.css';

const SCHOOLS = [
  {
    school: 'nus',
    name: 'National University of Singapore',
    years: '2025 — 2028',
    summary: "B.Eng Computer Engineering · First Class Honours · GPA 4.84/5.00 · NOC Silicon Valley '27",
    moduleLabel: "Modules · every one I've taken",
  },
  {
    school: 'uwc',
    name: 'UWC South East Asia',
    years: '2010 — 2023',
    summary: 'High School Diploma · IB 45/45',
    moduleLabel: 'IB subjects · 45/45',
  },
] as const;

const OTHER_LABEL: Record<string, string> = {
  award: 'Awards',
  competition: 'Competitions',
};

export function Education() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = eduItems.find((item) => item.key === selectedKey) ?? null;

  return (
    <section id="education" className={s.education}>
      <p className={s.eyebrow}>Education &amp; honours</p>
      <h2 className={s.heading}>
        The opening. <span className={s.sparkle}>✦</span>
      </h2>
      <p className={s.hint}>click any activity, award or competition — a little card opens</p>
      {SCHOOLS.map(({ school, name, years, summary, moduleLabel }) => {
        const items = eduItems.filter((item) => item.school === school);
        const activities = items.filter((item) => item.kind === 'activity');
        const others = items.filter((item) => item.kind !== 'activity');
        const otherLabel = OTHER_LABEL[others[0]?.kind] ?? '';

        return (
          <div key={school} className={s.card}>
            <div className={s.cardHead}>
              <h3 className={s.schoolName}>{name}</h3>
              <span className={s.years}>{years}</span>
            </div>
            <p className={s.summary}>{summary}</p>
            <div className={s.columns}>
              <div>
                <p className={s.columnLabel}>Activities</p>
                <ul className={s.list}>
                  {activities.map((item) => (
                    <li key={item.key} className={s.item}>
                      <button
                        type="button"
                        className={s.itemButton}
                        onClick={() => setSelectedKey(item.key)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={s.columnLabel}>{otherLabel}</p>
                <ul className={s.list}>
                  {others.map((item) => (
                    <li key={item.key} className={s.item}>
                      <button
                        type="button"
                        className={s.itemButton}
                        onClick={() => setSelectedKey(item.key)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ModuleList
              label={moduleLabel}
              groups={moduleGroups.filter((g) => g.school === school)}
            />
          </div>
        );
      })}
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
