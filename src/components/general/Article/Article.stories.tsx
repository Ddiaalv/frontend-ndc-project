import * as React from 'react';
import { Article } from './Article';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'General / Article',
  decorators: [withA11y],
};

export const withText = () => (
  <Article title={'Caracteristicas:'} text={'irrelevant text'} />
);
