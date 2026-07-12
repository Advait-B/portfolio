import { render, screen } from '@testing-library/react';
import { afterEach, test, expect, vi } from 'vitest';
import { RatingCards } from '../../src/components/Chess/RatingCards';

afterEach(() => {
  vi.restoreAllMocks();
});

test('falls back to the cached rating when the live fetch rejects', async () => {
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('offline'));

  render(<RatingCards />);

  expect(await screen.findByText('2538')).toBeInTheDocument();
  expect(screen.getByText('cached')).toBeInTheDocument();
});

test('shows the live rating when the fetch succeeds', async () => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ perfs: { blitz: { rating: 2600 } } }),
  } as Response);

  render(<RatingCards />);

  expect(await screen.findByText('2600')).toBeInTheDocument();
  expect(screen.queryByText('cached')).not.toBeInTheDocument();
});
