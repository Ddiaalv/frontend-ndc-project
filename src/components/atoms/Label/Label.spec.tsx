import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Label} from './';

describe('Label', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Label/>,
    );
    expect(renderResult.queryByText('Hello from Label!')).toBeTruthy();
  });
});