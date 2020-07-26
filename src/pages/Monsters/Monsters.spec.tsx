import * as React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Monsters } from './';

describe('Monsters', () => {
  it('should render the component', () => {
    const labelText = 'Buscar monstruo:';
    const renderResult: RenderResult = render(
      <Router>
        <Monsters />
      </Router>,
    );
    expect(renderResult.queryByText(labelText)).toBeTruthy();
  });

  xit('should display the default message', async () => {
    const { getByLabelText, getByText, getByAltText } = render(
      <Router>
        <Monsters />
      </Router>,
    );

    const input = getByLabelText('Buscar monstruo:');
    fireEvent.change(input, { target: { value: 'Rathalos' } });
    const MonsterImg = getByAltText('icono del monstruo Rathalos');
    fireEvent.click(MonsterImg);

    expect(getByText(/Ecología/i)).toBeTruthy();
  });
});
