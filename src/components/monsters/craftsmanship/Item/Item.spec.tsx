import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Item} from './';

describe('Item', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Item/>,
    );
    expect(renderResult.queryByText('Hello from Item!')).toBeTruthy();
  });
});