import s from './Skills.module.css';

const SOFTWARE =
  'C · C++ · Python · TypeScript · Verilog · ROS 2 · RTOS · OpenCV · MATLAB · Git · Linux';
const HARDWARE =
  'Arduino · Raspberry Pi · STM32 · IMU / sensor fusion · motor drivers · soldering · 3D printing · Fusion 360 · oscilloscope · PCB design';

function Row({ label, text, reverse }: { label: string; text: string; reverse?: boolean }) {
  return (
    <div className={s.row}>
      <span className={s.label}>{label}</span>
      <div className={s.track}>
        <span className={reverse ? s.groupReverse : s.group}>{text}</span>
        <span className={reverse ? s.groupReverse : s.group} aria-hidden>
          {text}
        </span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className={s.skills}>
      <Row label="Software" text={SOFTWARE} />
      <Row label="Hardware" text={HARDWARE} reverse />
    </div>
  );
}
