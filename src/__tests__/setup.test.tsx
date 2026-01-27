import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test Infrastructure', () => {
  it('should render a simple component', () => {
    const TestComponent = () => <div>Hello Test</div>;
    render(<TestComponent />);
    expect(screen.getByText('Hello Test')).toBeInTheDocument();
  });

  it('should have jest-dom matchers available', () => {
    const TestComponent = () => <button disabled>Click me</button>;
    render(<TestComponent />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
