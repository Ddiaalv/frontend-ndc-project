import * as React from 'react';
import './MonsterList.scss';
import { useEffect, useState } from 'react';

interface MonsterListProps {
  monsterName: string;
}

export const MonsterList: React.FC<MonsterListProps> = ({ monsterName }) => {
  const [errorFetch, setErrorFetch] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [monsterList, setMonsterList] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const filterByMonsterName = (monster: any) => {
    if (
      monster.nombre
        .toLowerCase()
        .trim()
        .includes(monsterName.toLowerCase().trim())
    ) {
      return monster;
    }
  };

  useEffect(() => {
    const filtered = monsterList.filter(filterByMonsterName);
    setFilteredMonsters(filtered);
  }, [monsterName]);

  useEffect(() => {
    fetch('http://backend-nodeca.herokuapp.com/listaMonstruos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMonsterList(result);
        },
        (error) => {
          setIsLoaded(true);
          setErrorFetch(error);
        },
      );
  }, []);

  if (errorFetch) {
    // @ts-ignore
    return <div>Error: {errorFetch.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    if (filteredMonsters.length !== 0) {
      return (
        <div className="MonsterList">
          {filteredMonsters.map((monstruo) => (
            // @ts-ignore
            <p>{monstruo.nombre}</p>
          ))}
        </div>
      );
    } else {
      return (
        <div className="MonsterList">
          {monsterList.map((monstruo) => (
            // @ts-ignore
            <p>{monstruo.nombre}</p>
          ))}
        </div>
      );
    }
  }
};

MonsterList.displayName = 'MonsterList';
