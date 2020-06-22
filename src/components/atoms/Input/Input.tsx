import * as React from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder = '',
  value,
  onChange,
}) => (
  <input
    className="Input"
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.displayName = 'Input';
