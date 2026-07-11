import { useEffect, useRef, type ReactNode } from 'react';
import s from './StoryDialog.module.css';

type StoryDialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function StoryDialog({ open, onClose, children }: StoryDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <button type="button" className={s.close} onClick={onClose} aria-label="Close">
        ✕
      </button>
      {children}
    </dialog>
  );
}
