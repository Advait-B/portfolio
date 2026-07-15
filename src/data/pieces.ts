export type Piece = {
  id: string;
  square: string;
  glyph: string;
  category: string;
  title: string;
  story: string;
  media: string[];
};

export const pieces: Piece[] = [
  {
    id: 'king',
    square: 'e1',
    glyph: '♚',
    category: 'Academics',
    title: 'National University of Singapore',
    story: 'B.Eng Computer Engineering, 2025–28. The king — everything is built around it.',
    media: [],
  },
  {
    id: 'queen',
    square: 'd2',
    glyph: '♛',
    category: 'Academics',
    title: 'First Class Honours · GPA 4.84/5.00',
    story: 'Highest Distinction. The most powerful piece on the board.',
    media: [],
  },
  {
    id: 'r1',
    square: 'a1',
    glyph: '♜',
    category: 'Interests',
    title: 'Chess — Candidate Master',
    story: 'National representative for Singapore. The game behind this whole board.',
    media: [],
  },
  {
    id: 'r2',
    square: 'h1',
    glyph: '♜',
    category: 'Interests',
    title: 'Travel — 40+ countries',
    story: 'The board is bigger than 64 squares. Forty-one flags and counting.',
    media: [],
  },
  {
    id: 'n1',
    square: 'c3',
    glyph: '♞',
    category: 'Pursuits',
    title: 'Robotics',
    story: 'The piece that moves like nothing else — building machines that do the same.',
    media: [],
  },
  {
    id: 'n2',
    square: 'f3',
    glyph: '♞',
    category: 'Pursuits',
    title: 'Hiking & the outdoors',
    story: 'Knight paths: never a straight line, always a better view.',
    media: [],
  },
  {
    id: 'b1',
    square: 'b4',
    glyph: '♝',
    category: 'Pursuits',
    title: 'Sustainability',
    story: 'Playing the long diagonal — research on floating solar, published via Stanford.',
    media: [],
  },
  {
    id: 'b2',
    square: 'g4',
    glyph: '♝',
    category: 'Pursuits',
    title: 'Guitar · EN / HI / ZH',
    story: 'Music and three languages — the quieter diagonals.',
    media: [],
  },
  {
    id: 'pa',
    square: 'c5',
    glyph: '♟',
    category: 'Project',
    title: 'Alex — Search & Rescue Robot',
    story:
      'A remotely-operated rover (Arduino + RPi) with a hand-built command-line cockpit. 2026.',
    media: [],
  },
  {
    id: 'ps',
    square: 'd5',
    glyph: '♟',
    category: 'Project',
    title: 'Snapsteady — Tremor Stabiliser',
    story:
      "A wearable that reads a Parkinson's tremor with a 6-axis IMU and cancels it in real time. 2025.",
    media: [],
  },
  {
    id: 'pm',
    square: 'e5',
    glyph: '♟',
    category: 'Project · ★ 1st/50+',
    title: 'mBot — Maze Navigator',
    story:
      'Autonomous maze robot fusing IR, ultrasonic and colour sensors. 1st of 50+ teams. 2025.',
    media: [],
  },
  {
    id: 'pp',
    square: 'f5',
    glyph: '♟',
    category: 'Project',
    title: 'Project 0 — Hydroponic System',
    story: 'A $1k-grant hydroponic garden built from recycled materials. 2023.',
    media: [],
  },
];
