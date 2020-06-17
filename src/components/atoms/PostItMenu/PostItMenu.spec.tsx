import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PostItMenu} from './';

describe('PostItMenu', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <PostItMenu/>,
    );
    expect(renderResult.queryByText('Hello from PostItMenu!')).toBeTruthy();
  });
});