export type Piece = {
  id: string;
  square: string;
  glyph: string;
  category: string;
  title: string;
  story: string;
};

export const pieces: Piece[] = [
  {
    id: 'king',
    square: 'e1',
    glyph: '♚',
    category: 'King',
    title: 'NUS',
    story:
      'Dummy text about NUS'
  },
  {
    id: 'queen',
    square: 'd1',
    glyph: '♛',
    category: 'Queen',
    title: 'UWC',
    story:
      'Dummy text about UWC'
  },
];
