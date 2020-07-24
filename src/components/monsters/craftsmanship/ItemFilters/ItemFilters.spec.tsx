import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ItemFilters} from './';

describe('ItemFilters', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ItemFilters/>,
    );
    expect(renderResult.queryByText('Hello from ItemFilters!')).toBeTruthy();
  });
});