import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FieldForm } from './index';

describe('FieldForm', () => {
  it('should render the component', () => {
    const labelText = 'Buscar monstruo:';
    const renderResult: RenderResult = render(
      <FieldForm
        type={'search'}
        name={'monsterSearcher'}
        text={labelText}
        placeholder={''}
      />,
    );
    expect(renderResult.getByLabelText(labelText)).toBeTruthy();
  });
});
