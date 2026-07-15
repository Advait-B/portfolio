import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders name', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /advait bagri/i })).toBeInTheDocument();
});
