import * as React from 'react';
import { useEffect, useState } from 'react';
import './MonsterList.scss';
import { MonsterIcon } from '../../atoms/MonsterIcon';
import { filterByElements, filterByMonsterName } from './filters';
import { MonstersProps } from '../../organisms/MonsterInformation/types';
import { URL } from '../../../utils/routes';

interface MonsterListProps {
  monsterName: string;
  pressedElements: string[];
}

export const MonsterList: React.FC<MonsterListProps> = ({
  monsterName,
  pressedElements,
}) => {
  const [monsters, setMonsters] = useState<MonstersProps[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<MonstersProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const byMonsterName = filterByMonsterName(monsterName);
  const byElements = filterByElements(pressedElements);

  const checkSearchFilters = (monsterList: MonstersProps[]) => {
    if (monsterName.length > 0) {
      if (pressedElements.length > 0) {
        setFilteredMonsters(monsterList.filter(byMonsterName).filter(byElements));
      } else {
        setFilteredMonsters(monsterList.filter(byMonsterName));
      }
    } else {
      setFilteredMonsters(monsterList.filter(byElements));
    }
  };

  useEffect(() => {
    let fetchUrl = `${URL.server}/listaMonstruos`;
    if (process.env.NODE_ENV !== 'production') {
      fetchUrl = `${URL.local}/monsters`;
    }
    fetch(fetchUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMonsters(result);
        },
        (errorFetch) => {
          setIsLoaded(true);
          setError(errorFetch);
        },
      );
  }, []);

  useEffect(() => {
    checkSearchFilters(monsters);
  }, [monsterName, pressedElements]);

  return (
    <div className="MonsterList">
      {error ? (
        <p>errorFetch</p>
      ) : !isLoaded ? (
        <p>Cargando...</p>
      ) : filteredMonsters.length !== 0 ? (
        filteredMonsters.map((monstruo) => <MonsterIcon name={monstruo.ruta} />)
      ) : monsters.length !== 0 ? (
        monsters.map((monstruo) => <MonsterIcon name={monstruo.ruta} />)
      ) : (
        <p>No existen coincidencias...</p>
      )}
    </div>
  );
};

MonsterList.displayName = 'MonsterList';
