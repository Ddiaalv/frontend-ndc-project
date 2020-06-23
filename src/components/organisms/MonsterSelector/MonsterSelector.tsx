import * as React from 'react';
import { useState } from 'react';
import './MonsterSelector.scss';
import { FieldForm } from '../../molecules/FieldForm';
import { MonsterList } from '../../molecules/MonsterList';
import { CheckBoxForm } from '../../molecules/CheckBoxForm';

export const MonsterSelector: React.FC<{}> = () => {
  const [getInput, setGetInput] = useState('');
  const [elements, setElements] = useState([]);

  const elementMonster = (event: any) => {
    const inputElement = event.target.value;
    // @ts-ignore
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
      <MonsterList monsterName={getInput} elements={elements} />
    </div>
  );
};

MonsterSelector.displayName = 'MonsterSelector';
