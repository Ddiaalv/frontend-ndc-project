import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { EquipmentStats} from './';

describe('EquipmentStats', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <EquipmentStats/>,
    );
    expect(renderResult.queryByText('Hello from EquipmentStats!')).toBeTruthy();
  });
});