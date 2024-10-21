import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Spiritual Development Program', () => {
  render(<App />);  // Используем только render, act автоматически обрабатывается

  const titleElements = screen.getAllByText(/Spiritual Development Program/i);
  expect(titleElements.length).toBeGreaterThan(0); // Проверяем, что хотя бы один элемент найден
});