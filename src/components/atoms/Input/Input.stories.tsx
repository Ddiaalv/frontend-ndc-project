import * as React from 'react';
import { Input } from './Input';
import { withA11y } from '@storybook/addon-a11y';
import { select, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Atoms / Input',
  decorators: [withA11y, withKnobs],
};

const inputTypes = ['password', 'email', 'text', 'checkbox'];

export const defaultView = () => (
  <Input
    name={'monsterSearch'}
    type={select('Type:', inputTypes, 'value')}
    id={'CheckFuego'}
  />
);
