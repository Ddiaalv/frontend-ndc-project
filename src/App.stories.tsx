import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Nodeca',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => <App />;
