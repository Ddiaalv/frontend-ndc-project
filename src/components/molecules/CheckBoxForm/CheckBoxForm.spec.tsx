import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { CheckBoxForm } from './';

describe('CheckBoxForm', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<CheckBoxForm />);
    expect(renderResult.getByLabelText('Fuego')).toBeTruthy();
  });
});
