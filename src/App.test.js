import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Singleton Pattern Configuration Manager heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/singleton pattern configuration manager/i);
  expect(headingElement).toBeInTheDocument();
});
