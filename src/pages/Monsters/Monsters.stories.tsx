import * as React from 'react';
import {Monsters} from './Monsters';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Monsters',
  decorators: [withA11y],
};

export const withText = () => <Monsters />;
