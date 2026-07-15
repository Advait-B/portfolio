export type Module = {
  code: string;
  name: string;
  grade: string;
  learnings: string;
};

export type ModuleGroup = {
  school: 'nus' | 'uwc';
  label: string;
  keys: string[];
};

export const moduleGroups: ModuleGroup[] = [
  { school: 'nus', label: 'Advanced placement · credited on entry', keys: ['cs1010', 'ma1505'] },
  {
    school: 'nus',
    label: 'Y1 Semester 1 · AY25/26',
    keys: ['cg1111a', 'cs1231', 'cs2040c', 'eg1311', 'ma1512', 'utw1001c'],
  },
  {
    school: 'nus',
    label: 'Y1 Semester 2 · AY25/26',
    keys: [
      'cde2301',
      'cfg1002',
      'cg2023',
      'cg2111a',
      'cs2113',
      'dtk1234',
      'gea1000',
      'ma1508e',
      'utc1702f',
    ],
  },
  { school: 'uwc', label: 'Higher level', keys: ['econhl', 'physhl', 'mathaahl'] },
  { school: 'uwc', label: 'Standard level', keys: ['chinbsl', 'engasl', 'psychsl'] },
];

export const modules: Record<string, Module> = {
  cs1010: {
    code: 'CS1010',
    name: 'Programming Methodology',
    grade: 'A',
    learnings:
      'My first structured dive into C — pointers, memory, and breaking a problem into functions before writing a single line. The habits from here carry into every project since.',
  },
  ma1505: {
    code: 'MA1505',
    name: 'Mathematics I',
    grade: 'A',
    learnings:
      'Single-variable calculus and series — the toolkit that every engineering module afterwards quietly assumes you have.',
  },
  cg1111a: {
    code: 'CG1111A',
    name: 'Engineering Principles and Practice I',
    grade: 'A+',
    learnings:
      "Where mBot was born. Circuits, sensors and a full build cycle — fusing IR, ultrasonic and colour sensing into a maze robot that took 1st of 50+ teams.",
  },
  cs1231: {
    code: 'CS1231',
    name: 'Discrete Structures',
    grade: 'A',
    learnings:
      'Proofs, logic, induction and counting. Learning to argue precisely — the closest a CS module gets to chess calculation.',
  },
  cs2040c: {
    code: 'CS2040C',
    name: 'Data Structures and Algorithms (C++)',
    grade: 'A+',
    learnings:
      'Trees, heaps, hashing, graphs — and the discipline of reasoning about complexity before reaching for code. My favourite module of Y1.',
  },
  eg1311: {
    code: 'EG1311',
    name: 'Design and Make',
    grade: 'A',
    learnings:
      'CAD, 3D printing and rapid prototyping — learning that the third iteration is always the one that works.',
  },
  ma1512: {
    code: 'MA1512',
    name: 'Differential Equations for Engineering',
    grade: 'A',
    learnings:
      'Modelling change — ODEs, Laplace transforms, and the first time maths felt like describing real systems rather than solving puzzles.',
  },
  utw1001c: {
    code: 'UTW1001C',
    name: 'At the Edges of the Law: Ethics, Morality and Society',
    grade: 'A−',
    learnings:
      'A writing module that taught me to build an argument the way I build a position — slowly, with every claim defended.',
  },
  cde2301: {
    code: 'CDE2301',
    name: 'Value Creation in Innovation',
    grade: 'A',
    learnings:
      'How engineers find problems worth solving — customer discovery, value propositions, and pitching. Fed directly into IDEATE.',
  },
  cfg1002: {
    code: 'CFG1002',
    name: 'Career Catalyst',
    grade: 'CS',
    learnings: 'Résumés, interviews and networking — short, practical, pass/fail.',
  },
  cg2023: {
    code: 'CG2023',
    name: 'Signals and Systems',
    grade: 'A',
    learnings:
      "Convolution, Fourier and frequency-domain thinking — the maths behind Snapsteady's tremor filtering.",
  },
  cg2111a: {
    code: 'CG2111A',
    name: 'Engineering Principles and Practice II',
    grade: 'A+',
    learnings:
      'Where Alex was born — a networked search-and-rescue rover with a Raspberry Pi brain, TLS comms and a hand-built command-line cockpit.',
  },
  cs2113: {
    code: 'CS2113',
    name: 'Software Engineering & Object-Oriented Programming',
    grade: 'A',
    learnings:
      'Working in a team on a real codebase — OOP design, git discipline, code reviews and the cost of a bad abstraction.',
  },
  dtk1234: {
    code: 'DTK1234',
    name: 'Design Thinking',
    grade: 'A',
    learnings:
      'Empathise before you engineer — user interviews and low-fi prototyping that reframed how I start every project.',
  },
  gea1000: {
    code: 'GEA1000',
    name: 'Quantitative Reasoning with Data',
    grade: 'A−',
    learnings: 'Statistical claims and how they mislead — confounders, sampling, and healthy scepticism about every chart I see.',
  },
  ma1508e: {
    code: 'MA1508E',
    name: 'Linear Algebra for Engineering',
    grade: 'A',
    learnings:
      'Vector spaces, eigenvalues and least squares — the language of every robotics and ML thing I want to do next.',
  },
  utc1702f: {
    code: 'UTC1702F',
    name: 'Thinking in Systems: Disaster Resilience',
    grade: 'A',
    learnings:
      'Feedback loops and cascading failure — systems thinking applied to disasters, which changed how I think about robustness in engineering too.',
  },
  econhl: {
    code: 'ECON HL',
    name: 'Economics',
    grade: '7',
    learnings: 'Incentives, market failure and data-response writing — my first taste of modelling messy human systems.',
  },
  physhl: {
    code: 'PHYS HL',
    name: 'Physics',
    grade: '7',
    learnings:
      'Mechanics through fields — the module that made me choose engineering. The IA was an early excuse to build and measure.',
  },
  mathaahl: {
    code: 'MATH AA HL',
    name: 'Mathematics: Analysis & Approaches',
    grade: '7',
    learnings: 'Calculus and proof at pace — the deep end that made university maths feel familiar.',
  },
  chinbsl: {
    code: 'CHIN B SL',
    name: 'Chinese B',
    grade: '7',
    learnings: 'Third language, hardest earned — now one of the three I travel with.',
  },
  engasl: {
    code: 'ENG A SL',
    name: 'English Language & Literature A',
    grade: '7',
    learnings: 'Close reading and rhetoric — where the writing voice on this site comes from.',
  },
  psychsl: {
    code: 'PSYCH SL',
    name: 'Psychology',
    grade: '7',
    learnings: 'Cognition, bias and research methods — surprisingly useful for both chess and user research.',
  },
};
