import * as React from 'react';
import { MonsterIcon } from './MonsterIcon';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Monsters / MonsterIcon',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => <MonsterIcon name={'Rathalos'} />;
