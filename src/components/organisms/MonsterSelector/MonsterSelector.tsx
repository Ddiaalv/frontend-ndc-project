import * as React from 'react';
import { useState } from 'react';
import './MonsterSelector.scss';
import { FieldForm } from '../../molecules/FieldForm';
import { MonsterList } from '../../molecules/MonsterList';
import { CheckBoxForm } from '../../molecules/CheckBoxForm';

export const MonsterSelector: React.FC<{}> = () => {
  const [getInput, setGetInput] = useState<string>('');
  const [elements, setElements] = useState<string[]>([]);

  const elementMonster = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target.value;
    if (!elements.includes(inputElement)) {
      setElements(elements.concat(inputElement));
    } else {
      setElements(elements.filter((element) => element !== inputElement));
    }
  };

  return (
    <div className="MonsterSelector">
      <form className={'MonsterFilter'}>
        <FieldForm
          type={'search'}
          name={'monsterSearcher'}
          text={'Buscar monstruo:'}
          onChange={(inputValue) => setGetInput(inputValue.target.value)}
        />
        <CheckBoxForm onChange={elementMonster} />
      </form>
      <MonsterList monsterName={getInput} pressedElements={elements} />
    </div>
  );
};

MonsterSelector.displayName = 'MonsterSelector';
