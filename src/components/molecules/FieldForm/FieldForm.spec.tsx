import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FieldForm } from './';

describe('FieldForm', () => {
  it('should display the default message', () => {
    const labelText = 'Buscar monstruo:';
    const renderResult: RenderResult = render(
      <FieldForm type={'search'} name={'monsterSearcher'} text={labelText} />,
    );
    expect(renderResult.getByLabelText(labelText)).toBeTruthy();
  });
});
