import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App'; // Your main app component

test('renders the app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello_world/i); // Update this with some text from your app
  expect(linkElement).toBeInTheDocument();
});
