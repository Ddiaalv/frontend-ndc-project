import * as React from 'react';
import { Input } from './Input';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Atoms / Input',
  decorators: [withA11y],
};

export const defaultView = () => <Input name={'monsterSearch'} type={'search'} />;
