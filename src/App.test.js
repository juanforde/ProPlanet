// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PlanetScaleV title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PlanetScaleV/i);
    expect(titleElement).toBeInTheDocument();
});
