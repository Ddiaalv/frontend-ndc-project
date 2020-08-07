import * as React from 'react';
import { useState } from 'react';
import './MonsterSelector.scss';
import { FieldForm } from '../../general/FieldForm';
import { MonsterList } from '../MonsterList';
import { CheckBoxForm } from '../../general/CheckBoxForm';

export const MonsterSelector: React.FC<{}> = () => {
  const [nameTyped, setNameTyped] = useState<string>('');
  const [elementsPressed, setElementsPressed] = useState<string[]>([]);
  const elements = ['Fuego', 'Agua', 'Rayo', 'Hielo', 'Draco'];

  const elementMonster = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target.value;
    if (!elementsPressed.includes(inputElement)) {
      setElementsPressed(elementsPressed.concat(inputElement));
    } else {
      setElementsPressed(elementsPressed.filter((element) => element !== inputElement));
    }
  };

  return (
    <div className="MonsterSelector">
      <form className={'MonsterFilter'}>
        <FieldForm
          type={'search'}
          name={'monsterSearcher'}
          text={'Buscar monstruo:'}
          placeholder={''}
          onChange={(inputValue: React.ChangeEvent<HTMLInputElement>) => setNameTyped(inputValue.target.value)}
        />
        <CheckBoxForm
          onChange={elementMonster}
          elements={elements}
          title={'Debilidades'}
        />
      </form>
      <MonsterList monsterName={nameTyped} pressedElements={elementsPressed} />
    </div>
  );
};

MonsterSelector.displayName = 'MonsterSelector';
