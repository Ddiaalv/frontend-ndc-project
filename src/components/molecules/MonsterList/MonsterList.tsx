import * as React from 'react';
import './MonsterList.scss';
import { useEffect, useState } from 'react';
import { MonsterIcon } from '../../atoms/MonsterIcon';

interface MonsterListProps {
  monsterName: string;
  elements: string[];
}

export const MonsterList: React.FC<MonsterListProps> = ({ monsterName, elements }) => {
  const [errorFetch, setErrorFetch] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [monsterList, setMonsterList] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const filterByMonsterName = (monster: any) => {
    return monster.nombre
      .toLowerCase()
      .trim()
      .includes(monsterName.toLowerCase().trim());
  };

  const filterByElements = (monster: any) => {
    let comprobar = false;
    elements.map((element) => {
      if (monster[element] >= 2) {
        comprobar = true;
      }
    });
    if (comprobar) {
      return monster;
    }
  };

  useEffect(() => {
    if (monsterName.length > 0) {
      if (elements.length > 0) {
        setFilteredMonsters(
          monsterList.filter(filterByMonsterName).filter(filterByElements),
        );
      } else {
        setFilteredMonsters(monsterList.filter(filterByMonsterName));
      }
    } else {
      setFilteredMonsters(monsterList.filter(filterByElements));
    }
  }, [monsterName, elements]);

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
            <MonsterIcon name={monstruo.ruta} />
          ))}
        </div>
      );
    } else if (monsterName !== '') {
      return <p>No existen coincidencias</p>;
    } else {
      return (
        <div className="MonsterList">
          {monsterList.map((monstruo, index) => (
            // @ts-ignore
            <MonsterIcon name={monstruo.ruta} key={index} />
          ))}
        </div>
      );
    }
  }
};

MonsterList.displayName = 'MonsterList';
