import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Items} from './';

describe('Items', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Items/>,
    );
    expect(renderResult.queryByText('Hello from Items!')).toBeTruthy();
  });
});