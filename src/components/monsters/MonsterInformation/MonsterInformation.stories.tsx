import * as React from 'react';
import { MonsterInformation } from './MonsterInformation';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'MonsterInformation',
  decorators: [withA11y],
};

export const withText = () => <MonsterInformation />;
