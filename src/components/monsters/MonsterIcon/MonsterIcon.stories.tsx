import * as React from 'react';
import { MonsterIcon } from './MonsterIcon';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Atoms / MonsterIcon',
  decorators: [withA11y],
};

export const defaultView = () => <MonsterIcon name={'Rathalos'} />;
