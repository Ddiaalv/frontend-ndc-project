import * as React from 'react';
import './MonsterList.scss';
import { useEffect, useState } from 'react';
import { MonsterIcon } from '../../atoms/MonsterIcon';

interface MonsterListProps {
  monsterName: string;
  pressedElements: string[];
}

export const MonsterList: React.FC<MonsterListProps> = ({
  monsterName,
  pressedElements,
}) => {
  const [errorFetch, setErrorFetch] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [monsterList, setMonsterList] = useState([]);
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
    checkSearchFilters(monsterList);
  }, [monsterName, pressedElements]);

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

const filterByMonsterName = (name: string) => (monster: any) => {
  return monster.nombre
    .toLowerCase()
    .trim()
    .includes(name.toLowerCase().trim());
};

const filterByElements = (elements: string[]) => (monster: any) => {
  let comprobar = false;
  elements.forEach((element: string) => {
    if (monster[element] >= 2) {
      comprobar = true;
    }
  });
  if (comprobar) {
    return monster;
  }
};
