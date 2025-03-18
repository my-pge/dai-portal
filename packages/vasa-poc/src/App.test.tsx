import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
      if (!message.includes('Could not parse CSS stylesheet')) {
        console.error(message);
      }
    });
  });
  test('renders the logo', () => {
    render(<App />);
    const imageElement = screen.getByAltText('pge logo');
    expect(imageElement).toBeInTheDocument();

  });

  test('renders the title', () => {
    render(<App />);
    const title = screen.getByText('2025 Distribution Planning');
    expect(title).toBeInTheDocument();

  });

  test('renders the help', () => {
    render(<App />);
    const help = screen.getByText('Help');
    expect(help).toBeInTheDocument();

  });
})
