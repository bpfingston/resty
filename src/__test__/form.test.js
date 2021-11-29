import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/index.js';

describe('Testing form component', () => {
  it('should use callback on submit', () => {
    let callback = jest.fn();

    render(<Form onSubmit={callback} />);

    let button = screen.getByRole('button');

    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
