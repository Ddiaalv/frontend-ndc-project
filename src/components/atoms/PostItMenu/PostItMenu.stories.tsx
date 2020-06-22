import * as React from 'react';
import { PostItMenu } from './PostItMenu';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Atoms / PostItMenu',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const withText = () => (
  <PostItMenu path={'/'} bgColor={'yellow'} children={'inicio'} />
);
