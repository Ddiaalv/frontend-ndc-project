import * as React from 'react';
import { MonsterSelector } from './MonsterSelector';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Monsters / MonsterSelector',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => <MonsterSelector />;
