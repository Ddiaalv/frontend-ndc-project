import * as React from 'react';
import { MonsterList } from './MonsterList';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'MonsterList',
  decorators: [withA11y],
};

export const defaultView = () => <MonsterList monsterName={'Rathalos'} />;
