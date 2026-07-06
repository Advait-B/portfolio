import type { CSSProperties } from 'react';
import s from './Sparkle.module.css';

type SparkleProps = {
  glyph?: string;
  size?: number;
  style?: CSSProperties;
  spin?: number;
};

export function Sparkle({ glyph = '✳', size = 54, style, spin = 26 }: SparkleProps) {
  return (
    <span
      aria-hidden
      className={s.sparkle}
      style={{ fontSize: size, animationDuration: `${spin}s`, ...style }}
    >
      {glyph}
    </span>
  );
}
