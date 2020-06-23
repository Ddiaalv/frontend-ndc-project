import * as React from 'react';
import { MonsterSelector } from './MonsterSelector';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms / MonsterSelector',
  decorators: [withA11y],
};

export const defaultView = () => <MonsterSelector />;
