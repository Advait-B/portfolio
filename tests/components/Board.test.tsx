import { fireEvent, render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Board } from '../../src/components/Board/Board';

test('clicking the e1 piece shows its story in the plaque', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /national university of singapore/i }));

  expect(screen.getByText('National University of Singapore')).toBeInTheDocument();
});

test('clicking a selected piece again clears the plaque', () => {
  render(<Board />);

  const piece = screen.getByRole('button', { name: /national university of singapore/i });
  fireEvent.click(piece);
  fireEvent.click(piece);

  expect(screen.getByText(/select a piece/i)).toBeInTheDocument();
});

test('open the full story opens the dialog with the piece story', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /national university of singapore/i }));
  fireEvent.click(screen.getByRole('button', { name: /open the full story/i }));

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveTextContent('National University of Singapore');
  expect(dialog).toHaveTextContent(/king — everything is built around it/i);
});

test('closing the dialog hides its content but keeps the trigger', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /national university of singapore/i }));
  const trigger = screen.getByRole('button', { name: /open the full story/i });
  fireEvent.click(trigger);

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toBeInTheDocument();
});
