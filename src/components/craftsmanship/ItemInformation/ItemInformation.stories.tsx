import * as React from 'react';
import { ItemInformation } from './ItemInformation';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ItemInformation',
  decorators: [withA11y],
};

export const withText = () => <ItemInformation itemInfo={''} />;
