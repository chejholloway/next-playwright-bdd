import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../src/pages/index';

describe('HomePage', () => {
  test('renders the component with initial count value', () => {
    render(<HomePage />);

    // Find the elements by their data-testid attributes
    const counterText = screen.getByTestId('counter-text');
    const decreaseButton = screen.getByTestId('decrease');
    const increaseButton = screen.getByTestId('increase');

    // Check if the component is rendered
    expect(counterText).toBeTruthy();
    expect(decreaseButton).toBeTruthy();
    expect(increaseButton).toBeTruthy();

    // Check if the initial count value is displayed correctly
    expect(counterText.textContent).toBe('Count: 0');
  });

  test('increments and decrements the count correctly', () => {
    render(<HomePage />);

    const counterText = screen.getByTestId('counter-text');
    const decreaseButton = screen.getByTestId('decrease');
    const increaseButton = screen.getByTestId('increase');

    // Click the increase button and check if count increases
    fireEvent.click(increaseButton);
    expect(screen.getByText('Count: 1')).toBeTruthy();

    // Click the decrease button and check if count decreases
    fireEvent.click(decreaseButton);
    expect(counterText.textContent).toBe('Count: 0');

    // Click the decrease button again and check if count doesn't go below 0
    fireEvent.click(decreaseButton);
    expect(counterText.textContent).toBe('Count: 0');
  });
});
