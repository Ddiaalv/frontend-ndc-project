import * as React from 'react';
import './Input.scss';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder = '',
  onChange,
}) => (
  <input
    className="Input"
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.displayName = 'Input';
