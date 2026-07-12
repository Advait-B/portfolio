import { Chess } from 'chess.js';

export type SquareVM = {
  id: string;
  file: string;
  rank: number;
  dark: boolean;
  glyph: string | null;
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const GLYPHS: Record<string, string> = {
  wk: '♔', wq: '♕', wr: '♖', wb: '♗', wn: '♘', wp: '♙',
  bk: '♚', bq: '♛', br: '♜', bb: '♝', bn: '♞', bp: '♟',
};

export function movesToFens(moves: string[]): string[] {
  const chess = new Chess();
  const fens = [chess.fen()]; // index 0 = start position
  for (const move of moves) {
    chess.move(move); // throws on bad SAN — let it
    fens.push(chess.fen());
  }
  return fens;
}

export function fenToSquares(fen: string): SquareVM[] {
  const board = new Chess(fen).board();
  const squares: SquareVM[] = [];

  board.forEach((row, rankIndex) => {
    const rank = 8 - rankIndex;
    row.forEach((cell, fileIndex) => {
      const file = FILES[fileIndex];
      squares.push({
        id: `${file}${rank}`,
        file,
        rank,
        dark: (fileIndex + rank) % 2 === 1,
        glyph: cell ? GLYPHS[`${cell.color}${cell.type}`] : null,
      });
    });
  });

  return squares;
}
