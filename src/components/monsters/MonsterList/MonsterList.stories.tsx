import * as React from 'react';
import { MonsterList } from './MonsterList';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Monsters / MonsterList',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => (
  <MonsterList monsterName={'Rathalos'} pressedElements={['fuego', 'agua']} />
);
