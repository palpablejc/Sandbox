import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const supRoni = screen.getByText(/Sup Roni/i);
  expect(supRoni).toBeInTheDocument();
});
