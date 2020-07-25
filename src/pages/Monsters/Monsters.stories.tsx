import * as React from 'react';
import { Monsters } from './Monsters';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Monsters',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const withText = () => <Monsters />;
