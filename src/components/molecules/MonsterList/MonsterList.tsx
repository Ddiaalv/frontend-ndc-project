import * as React from 'react';
import { useEffect, useState } from 'react';
import './MonsterList.scss';
import { MonsterIcon } from '../../atoms/MonsterIcon';
import { filterByElements, filterByMonsterName } from './filters';
import { GetFetchData } from '../../../utils/hooks/GetFetchData';
import { MonstersProps } from '../../organisms/MonsterInformation/types';

interface MonsterListProps {
  monsterName: string;
  pressedElements: string[];
}

export const MonsterList: React.FC<MonsterListProps> = ({
  monsterName,
  pressedElements,
}) => {
  const { arrayData, isLoaded, error, getArrayData } = GetFetchData();
  const [filteredMonsters, setFilteredMonsters] = useState<MonstersProps[]>([]);

  const byMonsterName = filterByMonsterName(monsterName);
  const byElements = filterByElements(pressedElements);

  const checkSearchFilters = (monsters: MonstersProps[]) => {
    if (monsterName.length > 0) {
      if (pressedElements.length > 0) {
        setFilteredMonsters(monsters.filter(byMonsterName).filter(byElements));
      } else {
        setFilteredMonsters(monsters.filter(byMonsterName));
      }
    } else {
      setFilteredMonsters(monsters.filter(byElements));
    }
  };

  useEffect(() => {
    const URL = 'http://backend-nodeca.herokuapp.com/listaMonstruos';
    getArrayData(URL);
  }, []);

  useEffect(() => {
    checkSearchFilters(arrayData);
  }, [monsterName, pressedElements]);

  return (
    <div className="MonsterList">
      {error ? (
        <p>errorFetch</p>
      ) : !isLoaded ? (
        <p>Cargando...</p>
      ) : filteredMonsters.length !== 0 ? (
        filteredMonsters.map((monstruo) => (
          <MonsterIcon name={monstruo.ruta} />
        ))
      ) : arrayData.length !== 0 ? (
        arrayData.map((monstruo) => (
          <MonsterIcon name={monstruo.ruta} />
        ))
      ) : (
        <p>No existen coincidencias...</p>
      )}
    </div>
  );
};

MonsterList.displayName = 'MonsterList';
