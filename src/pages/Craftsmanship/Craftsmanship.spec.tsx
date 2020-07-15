import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Craftsmanship} from './';

describe('Craftsmanship', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Craftsmanship/>,
    );
    expect(renderResult.queryByText('Hello from Craftsmanship!')).toBeTruthy();
  });
});