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
    grade: 'APC',
    learnings: 'Placement-credited — variables, control flow, functions and arrays in C.',
  },
  ma1505: {
    code: 'MA1505',
    name: 'Mathematics I',
    grade: 'APC',
    learnings: 'Placement-credited — single and multivariable calculus, vectors, series.',
  },
  cg1111a: {
    code: 'CG1111A',
    name: 'Engineering Principles and Practice I',
    grade: 'A',
    learnings: 'Built a line-following buggy — sensors, motor drivers and a soldered PCB.',
  },
  cs1231: {
    code: 'CS1231',
    name: 'Discrete Structures',
    grade: 'S',
    learnings: 'Proof techniques, sets, relations and graph theory as a base for CS2040C.',
  },
  cs2040c: {
    code: 'CS2040C',
    name: 'Data Structures and Algorithms (C++)',
    grade: 'B+',
    learnings: 'Trees, heaps, hashing, graphs — reasoning about complexity before writing code.',
  },
  eg1311: {
    code: 'EG1311',
    name: 'Design and Make',
    grade: 'A',
    learnings: 'A full design-build-test cycle in teams, from brief to a working prototype.',
  },
  ma1512: {
    code: 'MA1512',
    name: 'Differential Equations for Engineering',
    grade: 'A',
    learnings: 'ODEs, Laplace transforms and Fourier series applied to engineering systems.',
  },
  utw1001c: {
    code: 'UTW1001C',
    name: 'At the Edges of the Law: Ethics, Morality and Society',
    grade: 'A',
    learnings: 'Writing-intensive seminar on where law, ethics and society pull apart.',
  },
  cde2301: {
    code: 'CDE2301',
    name: 'Value Creation in Innovation',
    grade: 'S',
    learnings: 'Turning a technical idea into a viable venture — customers before code.',
  },
  cfg1002: {
    code: 'CFG1002',
    name: 'Career Catalyst',
    grade: 'CS',
    learnings: 'Career planning and self-reflection — turning strengths into a direction.',
  },
  cg2023: {
    code: 'CG2023',
    name: 'Signals and Systems',
    grade: 'A-',
    learnings: 'Convolution, Fourier and Laplace transforms, sampling and system response.',
  },
  cg2111a: {
    code: 'CG2111A',
    name: 'Engineering Principles and Practice II',
    grade: 'A+',
    learnings: 'A mobile robot with IMU-based navigation — control loops meeting hardware.',
  },
  cs2113: {
    code: 'CS2113',
    name: 'Software Engineering & Object-Oriented Programming',
    grade: 'A',
    learnings: 'OOP design, UML, testing and SDLC — shipping a team CLI app with git.',
  },
  dtk1234: {
    code: 'DTK1234',
    name: 'Design Thinking',
    grade: 'S',
    learnings: 'Empathize-define-ideate-prototype-test, run on a real problem end to end.',
  },
  gea1000: {
    code: 'GEA1000',
    name: 'Quantitative Reasoning with Data',
    grade: 'A+',
    learnings: 'Reading statistics critically — sampling bias, correlation vs. causation.',
  },
  ma1508e: {
    code: 'MA1508E',
    name: 'Linear Algebra for Engineering',
    grade: 'A+',
    learnings: 'Matrices, eigenvalues and vector spaces underneath graphics and controls.',
  },
  utc1702f: {
    code: 'UTC1702F',
    name: 'Thinking in Systems: Disaster Resilience',
    grade: 'CS',
    learnings: 'Systems thinking applied to how cities prepare for and absorb shocks.',
  },
  econhl: {
    code: 'ECON HL',
    name: 'Economics',
    grade: '7',
    learnings: 'Micro and macro theory grounded in real market and policy case studies.',
  },
  physhl: {
    code: 'PHYS HL',
    name: 'Physics',
    grade: '7',
    learnings: 'Mechanics through modern physics, with an independent investigation.',
  },
  mathaahl: {
    code: 'MATH AA HL',
    name: 'Mathematics: Analysis & Approaches',
    grade: '7',
    learnings: 'Calculus and algebra pushed toward proof, ahead of the NUS engineering core.',
  },
  chinbsl: {
    code: 'CHIN B SL',
    name: 'Chinese B',
    grade: '7',
    learnings: 'Second-language fluency — argumentative and narrative writing under exam conditions.',
  },
  engasl: {
    code: 'ENG A SL',
    name: 'English Language & Literature A',
    grade: '7',
    learnings: 'Close reading across genres — literature and non-literary texts side by side.',
  },
  psychsl: {
    code: 'PSYCH SL',
    name: 'Psychology',
    grade: '7',
    learnings: 'Biological, cognitive and sociocultural lenses on behaviour, backed by studies.',
  },
};
