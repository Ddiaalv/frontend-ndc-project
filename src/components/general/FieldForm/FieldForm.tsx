import * as React from 'react';
import './FieldForm.scss';

interface FieldFormProps {
  name: string;
  text: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FieldForm: React.FC<FieldFormProps> = ({
  name,
  text,
  type,
  placeholder,
  value,
  onChange,
}) => (
  <div className="FieldForm">
    <label htmlFor={name}>{text}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

FieldForm.displayName = 'FieldForm';
