import * as React from 'react';
import { useEffect, useState } from 'react';
import './MonsterList.scss';
import { MonsterIcon } from '../MonsterIcon';
import { MonstersProps } from '../MonsterInformation/types';
import { URL } from '../../../utils/routes';
import { getMonsterList } from '../../../domain/service/monsters/monstersService';
import { checkSearchFilters } from '../../../domain/service/monsters/filterMonstersService';

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

  useEffect(() => {
    let fetchUrl = `${URL.server}/listaMonstruos`;
    if (process.env.NODE_ENV !== 'production') {
      fetchUrl = `${URL.local}/monsters`;
    }
    getMonsterList(fetchUrl).then((result) => {
      setMonsters(result);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    setFilteredMonsters(checkSearchFilters(monsters, monsterName, pressedElements));
  }, [monsterName, pressedElements]);

  return (
    <div className="MonsterList">
      {error ? (
        <p>errorFetch</p>
      ) : !isLoaded ? (
        <p>Cargando...</p>
      ) : filteredMonsters.length !== 0 ? (
        filteredMonsters.map((monstruo: MonstersProps) => (
          <MonsterIcon name={monstruo.ruta} />
        ))
      ) : monsters.length !== 0 ? (
        monsters.map((monstruo: MonstersProps) => <MonsterIcon name={monstruo.ruta} />)
      ) : (
        <p>No existen coincidencias...</p>
      )}
    </div>
  );
};

MonsterList.displayName = 'MonsterList';
