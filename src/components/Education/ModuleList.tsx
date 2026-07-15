import { useState } from 'react';
import { modules, type ModuleGroup } from '../../data/modules';
import s from './Education.module.css';

type ModuleListProps = { label: string; groups: ModuleGroup[] };

export function ModuleList({ label, groups }: ModuleListProps) {
  const [expanded, setExpanded] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const total = groups.reduce((n, g) => n + g.keys.length, 0);

  return (
    <div className={s.moduleList}>
      <div className={s.moduleHead}>
        <span className={s.moduleLabel}>{label}</span>
        <button
          type="button"
          className={s.moduleToggle}
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Hide −' : `View all ${total} +`}
        </button>
      </div>
      {expanded && (
        <div className={s.moduleGroups}>
          {groups.map((group) => (
            <div key={group.label}>
              <p className={s.moduleGroupLabel}>{group.label}</p>
              <ul className={s.moduleRows}>
                {group.keys.map((key) => {
                  const mod = modules[key];
                  const isOpen = openKey === key;
                  return (
                    <li key={key} className={s.moduleRow}>
                      <button
                        type="button"
                        className={s.moduleRowButton}
                        aria-expanded={isOpen}
                        onClick={() => setOpenKey(isOpen ? null : key)}
                      >
                        <span className={s.moduleCode}>{mod.code}</span>
                        <span className={s.moduleName}>{mod.name}</span>
                        <span aria-hidden className={s.moduleChevron}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className={s.modulePanel}>
                          <span className={s.moduleGrade}>{mod.grade}</span>
                          <p className={s.moduleLearnings}>{mod.learnings}</p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
