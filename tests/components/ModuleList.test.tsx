import { fireEvent, render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { ModuleList } from '../../src/components/Education/ModuleList';
import { moduleGroups } from '../../src/data/modules';

const nusGroups = moduleGroups.filter((g) => g.school === 'nus');

test('outer toggle reveals module groups', () => {
  render(<ModuleList groups={nusGroups} />);

  expect(screen.queryByText('CS2040C')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /view all/i }));

  expect(screen.getByText('CS2040C')).toBeInTheDocument();
});

test('clicking a module reveals its grade and collapses on a second click', () => {
  render(<ModuleList groups={nusGroups} />);
  fireEvent.click(screen.getByRole('button', { name: /view all/i }));

  const row = screen.getByRole('button', { name: /CS2040C/i });
  fireEvent.click(row);
  expect(screen.getByText('B+')).toBeInTheDocument();

  fireEvent.click(row);
  expect(screen.queryByText('B+')).not.toBeInTheDocument();
});

test('only one row is open at a time', () => {
  render(<ModuleList groups={nusGroups} />);
  fireEvent.click(screen.getByRole('button', { name: /view all/i }));

  fireEvent.click(screen.getByRole('button', { name: /CS2040C/i }));
  expect(screen.getByText('B+')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /EG1311/i }));
  expect(screen.queryByText('B+')).not.toBeInTheDocument();
  expect(screen.getByText('Design and Make')).toBeInTheDocument();
});
