import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PostItMenu } from './';
import { BrowserRouter } from 'react-router-dom';

describe('PostItMenu', () => {
  it('should display the default message', () => {
    const text = 'inicio';
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <PostItMenu children={text} path={'/'} bgColor={'yellow'} />,
      </BrowserRouter>,
    );
    expect(renderResult.queryByText(text)).toBeTruthy();
  });
});
