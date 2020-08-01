import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ItemInformation} from './';

describe('ItemInformation', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ItemInformation/>,
    );
    expect(renderResult.queryByText('Hello from ItemInformation!')).toBeTruthy();
  });
});