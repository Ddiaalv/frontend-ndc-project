import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Label } from './';

describe('Label', () => {
  it('should display the default message', () => {
    const text = 'testing message';
    const renderResult: RenderResult = render(<Label name={'searcher'} text={text} />);
    expect(renderResult.queryByText(text)).toBeTruthy();
  });
});
