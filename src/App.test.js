import { render, screen } from '@testing-library/react';
import App from './App';

// Define una prueba para verificar que el enlace "learn react" se renderiza en el documento
test('renders learn react link', () => {
  render(<App />); // Renderiza el componente App
  const linkElement = screen.getByText(/learn react/i); // Busca el elemento de enlace que contiene el texto "learn react"
  expect(linkElement).toBeInTheDocument(); // Verifica que el elemento esté presente en el documento
});
