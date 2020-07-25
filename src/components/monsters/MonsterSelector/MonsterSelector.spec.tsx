import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterSelector } from './index';

describe('MonsterSelector', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<MonsterSelector />);
    expect(renderResult.queryByText('Hello from MonsterSelector!')).toBeTruthy();
  });
});
