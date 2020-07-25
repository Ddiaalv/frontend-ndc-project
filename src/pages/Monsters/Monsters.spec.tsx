import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Monsters} from './';

describe('Monsters', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Monsters/>,
    );
    expect(renderResult.queryByText('Hello from Monsters!')).toBeTruthy();
  });
});