import * as React from 'react';
import './Label.scss';

interface LabelProps {
  text: string;
  name: string;
}
export const Label: React.FC<LabelProps> = ({ text, name }) => (
  <label htmlFor={name}>{text}</label>
);

Label.displayName = 'Label';
