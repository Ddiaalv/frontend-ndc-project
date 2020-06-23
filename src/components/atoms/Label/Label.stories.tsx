import * as React from 'react';
import { Label } from './Label';
import { withA11y } from '@storybook/addon-a11y';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Atoms / Label',
  decorators: [withA11y, withKnobs],
};

export const withText = () => (
  <Label name={'searchMonster'} text={text('Label Text', 'Buscar monstruo:')} />
);
