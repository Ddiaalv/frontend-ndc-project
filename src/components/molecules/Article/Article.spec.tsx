import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Article} from './';

describe('Article', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Article/>,
    );
    expect(renderResult.queryByText('Hello from Article!')).toBeTruthy();
  });
});