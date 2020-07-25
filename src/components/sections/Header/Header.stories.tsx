import * as React from 'react';
import { Header } from './Header';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Sections / Header',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => <Header />;
