import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterList} from './';

describe('MonsterList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <MonsterList/>,
    );
    expect(renderResult.queryByText('Hello from MonsterList!')).toBeTruthy();
  });
});