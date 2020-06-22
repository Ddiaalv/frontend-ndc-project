import * as React from 'react';
import {CheckBoxForm} from './CheckBoxForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'CheckBoxForm',
  decorators: [withA11y],
};

export const withText = () => <CheckBoxForm />;
