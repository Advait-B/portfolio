import type { Piece } from '../data/pieces';

export type Square = {
  id: string;
  file: string;
  rank: number;
  dark: boolean;
  piece?: Piece;
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export function buildBoard(pieces: Piece[]): Square[] {
  const bySquare = new Map(pieces.map((p) => [p.square, p]));
  const squares: Square[] = [];

  for (let rank = 8; rank >= 1; rank--) {
    FILES.forEach((file, fileIndex) => {
      const id = `${file}${rank}`;
      squares.push({
        id,
        file,
        rank,
        dark: (fileIndex + rank) % 2 === 1,
        piece: bySquare.get(id),
      });
    });
  }

  return squares;
}
