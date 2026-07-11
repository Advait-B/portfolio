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
    category: 'King',
    title: 'NUS',
    story:
      'Dummy text about NUS',
    media: ['Dummy media 1 about NUS', 'Dummy media 2 about NUS'],
  },
  {
    id: 'queen',
    square: 'd1',
    glyph: '♛',
    category: 'Queen',
    title: 'UWC',
    story:
      'Dummy text about UWC',
    media: ['Dummy media 1 about UWC', 'Dummy media 2 about UWC'],
  },
];
