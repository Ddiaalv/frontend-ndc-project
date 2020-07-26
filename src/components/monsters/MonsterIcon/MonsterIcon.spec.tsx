import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MonsterIcon } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('MonsterIcon', () => {
  it('should render the component', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <MonsterIcon name={'Rathalos'} />
      </BrowserRouter>,
    );
    expect(getByAltText('icono del monstruo Rathalos')).toBeTruthy();
  });
});
