import * as React from 'react';
import './FieldForm.scss';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

interface FieldFormProps {
  name: string;
  text: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FieldForm: React.FC<FieldFormProps> = ({ name, text, type, onChange }) => (
  <div className="FieldForm">
    <Label name={name} text={text} />
    <Input id={name} type={type} name={name} onChange={onChange} />
  </div>
);

FieldForm.displayName = 'FieldForm';
