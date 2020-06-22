import * as React from 'react';
import { FieldForm } from './FieldForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules / FieldForm',
  decorators: [withA11y],
};

export const defaultView = () => (
  <FieldForm name={'monsterSearcher'} text={'Buscar monstruo'} type={'search'} />
);
