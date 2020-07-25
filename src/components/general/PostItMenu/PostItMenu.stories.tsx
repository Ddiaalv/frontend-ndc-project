import * as React from 'react';
import { PostItMenu } from './PostItMenu';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';
import { select, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Atoms / PostItMenu',
  decorators: [
    withA11y,
    withKnobs,
    (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>,
  ],
};
const menuValues = {
  menuName: ['Menu one', 'Menu two', 'Menu three', 'Menu four'],
  colors: ['yellow', 'pink', 'blue', 'green'],
};

export const withText = () => (
  <PostItMenu
    path={'/'}
    bgColor={select('Colors', menuValues.colors, 'yellow')}
    children={text('title', 'inicio')}
  />
);
export const allPostItMenu = () =>
  menuValues.menuName.map((menu, index) => {
    return (
      <PostItMenu
        path={'/'}
        bgColor={select(
          `Color ${menuValues.menuName[index]}`,
          menuValues.colors,
          'yellow',
        )}
        children={text(`Title ${menu}`, 'inicio')}
      />
    );
  });
