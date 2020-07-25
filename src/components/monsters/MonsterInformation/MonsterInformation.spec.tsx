import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterInformation } from './index';

describe('MonsterInformation', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<MonsterInformation />);
    expect(renderResult.queryByText('Hello from MonsterInformation!')).toBeTruthy();
  });
});
