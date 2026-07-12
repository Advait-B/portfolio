import { describe, expect, test } from 'vitest';
import { movesToFens, fenToSquares } from '../../src/lib/fen';
import { games } from '../../src/data/games';

describe('movesToFens', () => {
  test('Opera Game has 34 positions (start + 33 plies)', () => {
    const opera = games.find((g) => g.id === 'opera')!;
    expect(movesToFens(opera.moves)).toHaveLength(34);
  });

  test('Immortal Game has 46 positions', () => {
    const immortal = games.find((g) => g.id === 'immortal')!;
    expect(movesToFens(immortal.moves)).toHaveLength(46);
  });

  test('Game of the Century has 83 positions', () => {
    const century = games.find((g) => g.id === 'century')!;
    expect(movesToFens(century.moves)).toHaveLength(83);
  });

  test('garbage SAN throws', () => {
    expect(() => movesToFens(['e4', 'not-a-move'])).toThrow();
  });
});

describe('fenToSquares', () => {
  test('start position has 64 squares, 32 occupied', () => {
    const squares = fenToSquares(movesToFens([])[0]);
    expect(squares).toHaveLength(64);
    expect(squares.filter((sq) => sq.glyph !== null)).toHaveLength(32);
  });

  test('a1 is dark, matching lib/board.ts convention', () => {
    const squares = fenToSquares(movesToFens([])[0]);
    expect(squares.find((sq) => sq.id === 'a1')!.dark).toBe(true);
  });
});
