import * as React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { Input } from './';

describe('Input', () => {
  it('should display the default message', () => {
    const inputValue = 'rathalos';
    const renderResult: RenderResult = render(
      <Input name={'searcher'} type={'text'} placeholder={'Rathalos'} />,
    );
    const emailField = renderResult.getByPlaceholderText('Rathalos');
    fireEvent.change(emailField, { target: { value: inputValue } });
    // @ts-ignore
    expect(emailField.value).toContain(inputValue);
  });
});
