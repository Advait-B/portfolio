import { describe, expect, test } from 'vitest';
import { buildBoard } from '../../src/lib/board';
import { pieces } from '../../src/data/pieces';

describe('buildBoard', () => {
  test('produces 64 squares', () => {
    expect(buildBoard(pieces)).toHaveLength(64);
  });

  test('a1 is dark and colors alternate', () => {
    const b = buildBoard(pieces);
    expect(b.find((sq) => sq.id === 'a1')!.dark).toBe(true);
    expect(b.find((sq) => sq.id === 'b1')!.dark).toBe(false);
  });

  test('places each piece on its square', () => {
    const b = buildBoard(pieces);
    const e1 = b.find((sq) => sq.id === 'e1');
    expect(e1?.piece?.title).toBe('National University of Singapore');
  });

  test('every piece has a non-empty title and story', () => {
    for (const piece of pieces) {
      expect(piece.title.length).toBeGreaterThan(0);
      expect(piece.story.length).toBeGreaterThan(0);
    }
  });
});
