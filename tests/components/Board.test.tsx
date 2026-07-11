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

test('read full story opens the dialog with the media carousel', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /nus/i }));
  fireEvent.click(screen.getByRole('button', { name: /read full story/i }));

  expect(screen.getByText('Dummy media 1 about NUS')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /^next$/i }));
  expect(screen.getByText('Dummy media 2 about NUS')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /^next$/i }));
  expect(screen.getByText('Dummy media 1 about NUS')).toBeInTheDocument();
});

test('closing the dialog hides its content but keeps the trigger', () => {
  render(<Board />);

  fireEvent.click(screen.getByRole('button', { name: /nus/i }));
  const trigger = screen.getByRole('button', { name: /read full story/i });
  fireEvent.click(trigger);

  fireEvent.click(screen.getByRole('button', { name: /close/i }));

  expect(screen.queryByText('Dummy media 1 about NUS')).not.toBeInTheDocument();
  expect(trigger).toBeInTheDocument();
});
