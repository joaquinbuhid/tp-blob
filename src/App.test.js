import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('muestra los tres botones de Blob', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: /crear blob de texto/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /descargar blob/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /usar slice\(\)/i })).toBeInTheDocument();
});

test('crea un blob de texto', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /crear blob de texto/i }));

  expect(screen.getByText(/blob creado con éxito/i)).toBeInTheDocument();
});
