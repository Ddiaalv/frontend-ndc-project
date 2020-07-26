import * as React from 'react';
import { render } from '@testing-library/react';
import { MonsterCard } from './index';

describe('MonsterCard', () => {
  it('should render the component', () => {
    const { getByAltText, getByText } = render(
      <MonsterCard
        name={'Rathalos'}
        nameRoute={'Rathalos'}
        species={'Wyvern volador'}
        type={'Grande'}
      />,
    );
    const monsterImg = getByAltText('icono del monstruo Rathalos');
    expect(monsterImg).toBeTruthy();
    const monsterName = getByText(/Rathalos/i);
    expect(monsterName).toBeTruthy();
    const monsterSpecie = getByText(/Wyvern volador/i);
    expect(monsterSpecie).toBeTruthy();
    const monsterType = getByText(/Grande/i);
    expect(monsterType).toBeTruthy();
  });
});
