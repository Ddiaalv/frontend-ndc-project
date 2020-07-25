import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterCard } from './index';

describe('MonsterCard', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<MonsterCard />);
    expect(renderResult.queryByText('Hello from MonsterCard!')).toBeTruthy();
  });
});
