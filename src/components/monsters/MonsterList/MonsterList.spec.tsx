import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterList } from './index';

describe('MonsterList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <MonsterList pressedElements={['fuego']} monsterName={'Rathalos'} />,
    );
    expect(renderResult.queryByText('fuego')).toBeTruthy();
  });
});
