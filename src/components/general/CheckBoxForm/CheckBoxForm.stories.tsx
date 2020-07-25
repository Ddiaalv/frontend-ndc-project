import * as React from 'react';
import { CheckBoxForm } from './CheckBoxForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules / CheckBoxForm',
  decorators: [withA11y],
};
const elements = ['Fuego', 'Agua', 'Rayo', 'Hielo', 'Draco'];
export const withText = () => <CheckBoxForm elements={elements} title={'Debilidades'} />;
