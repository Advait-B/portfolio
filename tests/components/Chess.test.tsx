import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, test, expect, vi } from 'vitest';
import { Chess } from '../../src/components/Chess/Chess';

beforeEach(() => {
  // ratings aren't under test here — keep them quiet and settled
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('offline'));
});

test('stepping back from the final position shows the previous move', () => {
  render(<Chess />);

  fireEvent.click(screen.getByRole('button', { name: 'Back' }));

  expect(screen.getByText(/move 32 of 33/)).toBeInTheDocument();
});

test('forward is disabled at the final position', () => {
  render(<Chess />);

  expect(screen.getByRole('button', { name: 'Forward' })).toBeDisabled();
});

test('switching games resets the replay to its final position', () => {
  render(<Chess />);

  fireEvent.click(screen.getByRole('button', { name: 'Back' }));
  fireEvent.click(screen.getByRole('tab', { name: /immortal game/i }));

  expect(screen.getByText(/move 45 of 45/)).toBeInTheDocument();
});
