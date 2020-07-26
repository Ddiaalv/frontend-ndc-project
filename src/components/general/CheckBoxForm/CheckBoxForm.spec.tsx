import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { CheckBoxForm } from './index';

describe('CheckBoxForm', () => {
  const elements = ['fuego', 'agua', 'rayo', 'hielo', 'draco'];
  it('should render the component', () => {
    const renderResult: RenderResult = render(
      <CheckBoxForm elements={elements} title={'Debilidades'} />,
    );
    expect(renderResult.getByText(/Debilidades:/i)).toBeTruthy();
  });
});
