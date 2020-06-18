import * as React from 'react';
import { Label } from './Label';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Atoms / Label',
  decorators: [withA11y],
};

export const withText = () => <Label name={'searchMonster'} text={'Buscar monstruo:'} />;
