import { render, screen, within } from '@testing-library/react';
import App from '../src/App';

test('renders name', () => {
  render(<App />);
  expect(within(screen.getByRole('main')).getByText(/advait/i)).toBeInTheDocument();
});
