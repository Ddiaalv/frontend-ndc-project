import * as React from 'react';
import './MonsterList.scss';
import { useEffect, useState } from 'react';
import { MonsterIcon } from '../../atoms/MonsterIcon';
import { filterByElements, filterByMonsterName } from './filters';
import { GetFetchData } from '../../../utils/hooks/GetFetchData';

interface MonsterListProps {
  monsterName: string;
  pressedElements: string[];
}

export const MonsterList: React.FC<MonsterListProps> = ({
  monsterName,
  pressedElements,
}) => {
  const { arrayData, isLoaded, error, getArrayData } = GetFetchData();
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const byMonsterName = filterByMonsterName(monsterName);
  const byElements = filterByElements(pressedElements);

  const checkSearchFilters = (monsters: never[]) => {
    const monsterNameHasContent = monsterName.length > 0;
    const monsterWeaknessHasContent = pressedElements.length > 0;
    if (monsterNameHasContent) {
      if (monsterWeaknessHasContent) {
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
          // @ts-ignore
          <MonsterIcon name={monstruo.ruta} />
        ))
      ) : arrayData.length !== 0 ? (
        arrayData.map((monstruo) => (
          // @ts-ignore
          <MonsterIcon name={monstruo.ruta} />
        ))
      ) : (
        <p>no hay</p>
      )}
    </div>
  );
};

MonsterList.displayName = 'MonsterList';
