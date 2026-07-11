import { fireEvent, render, screen, within } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Education } from '../../src/components/Education/Education';

test('clicking an item opens its popup with the right year', () => {
  render(<Education />);

  fireEvent.click(screen.getByRole('button', { name: /crest gold award/i }));

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByText(/2022/)).toBeInTheDocument();
});

test('closing the popup removes its content', () => {
  render(<Education />);

  fireEvent.click(screen.getByRole('button', { name: /crest gold award/i }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByText(/gold-level recognition/i)).toBeInTheDocument();

  fireEvent.click(within(dialog).getByRole('button', { name: /close/i }));

  expect(within(dialog).queryByText(/gold-level recognition/i)).not.toBeInTheDocument();
});
