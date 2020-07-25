import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Pagination } from './index';

describe('Pagination', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<Pagination />);
    expect(renderResult.queryByText('Hello from Pagination!')).toBeTruthy();
  });
});
