import { fireEvent, render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Board } from '../../src/components/Board/Board';

test('clicking the e1 piece shows its story in the plaque', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /nus/i }));

  expect(screen.getByText('NUS')).toBeInTheDocument();
});

test('clicking a selected piece again clears the plaque', () => {
  render(<Board />);

  const piece = screen.getByRole('button', { name: /nus/i });
  fireEvent.click(piece);
  fireEvent.click(piece);

  expect(screen.getByText(/select a piece/i)).toBeInTheDocument();
});
