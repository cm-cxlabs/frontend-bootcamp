import { App } from './App';
import { render, screen } from './utils/test-utils';

describe('Simple working test', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/React Vite Boilerplate/i)).toBeInTheDocument();
  });
});
