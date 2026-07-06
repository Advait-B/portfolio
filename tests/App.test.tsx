import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /advait/i })).toBeInTheDocument();
});
