import * as React from 'react';
import { Craftsmanship } from './Craftsmanship';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Craftsmanship / Craftsmanship',
  decorators: [withA11y],
};

export const withText = () => <Craftsmanship />;
