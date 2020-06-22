import * as React from 'react';
import './CheckBoxForm.scss';
import { Label } from '../../atoms/Label';
import { Input } from '../../atoms/Input';

interface CheckBoxFormProps {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxForm: React.FC<CheckBoxFormProps> = ({ onChange }) => {
  const elements = ['Fuego', 'Agua', 'Rayo', 'Hielo', 'Draco'];
  return (
    <div className="CheckBoxForm">
      Debilidades:
      {elements.map((element) => {
        return (
          <div className="CheckBoxField">
            <Input
              type={'checkbox'}
              name={`Check${element}`}
              value={element.toLowerCase()}
              onChange={onChange}
            />
            <Label text={element} name={`Check${element}`} />
          </div>
        );
      })}
    </div>
  );
};

CheckBoxForm.displayName = 'CheckBoxForm';
