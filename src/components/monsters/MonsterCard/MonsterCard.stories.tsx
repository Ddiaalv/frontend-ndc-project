import * as React from 'react';
import { MonsterCard } from './MonsterCard';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Monsters / MonsterCard',
  decorators: [withA11y],
};

export const withText = () => (
  <MonsterCard
    name={'Rathalos'}
    nameRoute={'Rathalos'}
    species={'Wyvern volador'}
    type={'Grande'}
  />
);
