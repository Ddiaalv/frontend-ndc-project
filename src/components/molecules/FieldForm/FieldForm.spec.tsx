import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FieldForm} from './';

describe('FieldForm', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FieldForm/>,
    );
    expect(renderResult.queryByText('Hello from FieldForm!')).toBeTruthy();
  });
});