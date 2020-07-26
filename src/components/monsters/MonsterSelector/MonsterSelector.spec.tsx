import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterSelector } from './index';

describe('MonsterSelector', () => {
  it('should render the component', () => {
    const { getByText } = render(<MonsterSelector />);
    expect(getByText('Buscar monstruo:')).toBeTruthy();
  });
});
