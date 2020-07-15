import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { DroppableItemFrame} from './';

describe('DroppableItemFrame', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <DroppableItemFrame/>,
    );
    expect(renderResult.queryByText('Hello from DroppableItemFrame!')).toBeTruthy();
  });
});