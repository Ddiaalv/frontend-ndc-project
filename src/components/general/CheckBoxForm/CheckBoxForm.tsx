import * as React from 'react';
import './CheckBoxForm.scss';

interface CheckBoxFormProps {
  title: string;
  elements: string[];
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxForm: React.FC<CheckBoxFormProps> = ({
  elements,
  title,
  onChange,
}) => {
  return (
    <div className="CheckBoxForm">
      {title}:
      {elements.map((element, index) => {
        return (
          <div className="CheckBoxField" key={index}>
            <input
              id={`Check${element}`}
              type={'checkbox'}
              name={`Check${element}`}
              placeholder={''}
              value={element.toLowerCase()}
              onChange={onChange}
            />
            <label htmlFor={`Check${element}`}>{element}</label>
          </div>
        );
      })}
    </div>
  );
};

CheckBoxForm.displayName = 'CheckBoxForm';
