import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterIcon } from './index';

describe('MonsterIcon', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<MonsterIcon />);
    expect(renderResult.queryByText('Hello from MonsterIcon!')).toBeTruthy();
  });
});
