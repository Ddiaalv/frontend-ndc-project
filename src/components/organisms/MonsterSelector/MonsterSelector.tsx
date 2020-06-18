import * as React from 'react';
import './MonsterSelector.scss';
import { FieldForm } from '../../molecules/FieldForm';
import { useState } from 'react';
import { MonsterList } from '../../molecules/MonsterList';

export const MonsterSelector: React.FC<{}> = () => {
  const [getInput, setGetInput] = useState('');

  return (
    <div className="MonsterSelector">
      <form>
        <FieldForm
          type={'search'}
          name={'monsterSearcher'}
          text={'Buscar monstruo:'}
          onChange={(inputValue) => setGetInput(inputValue.target.value)}
        />
      </form>
      <MonsterList monsterName={getInput} />
    </div>
  );
};

MonsterSelector.displayName = 'MonsterSelector';
