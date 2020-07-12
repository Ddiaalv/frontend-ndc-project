import * as React from 'react';
import { useEffect, useState } from 'react';
import './MonsterInformation.scss';
import { useParams } from 'react-router-dom';
import { MonsterCard } from '../../molecules/MonsterCard';
import bigCrown from '../../../assets/big-crown.png';
import { Article } from '../../molecules/Article';
import { MonsterProps } from './types';

export const MonsterInformation: React.FC<{}> = () => {
  const { monster: urlParam } = useParams();
  const [monsterInfo, setMonsterInfo] = useState<MonsterProps>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const URL = `https://backend-nodeca.herokuapp.com/monstruo/${urlParam}`;
    // const URL = `http://localhost:3010/monsters/${urlParam}`;
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMonsterInfo(result[0]);
        },
        (errorFetch) => {
          setIsLoaded(true);
          setError(errorFetch);
        },
      );
  }, [urlParam]);

  return (
    <div className="MonsterInformation">
      {isLoaded && monsterInfo !== undefined ? (
        <>
          <h2>Ecología</h2>
          <MonsterCard
            name={monsterInfo.nombre}
            nameRoute={monsterInfo.ruta}
            species={monsterInfo.especie}
            type={monsterInfo.tipo}
          />
          <Article title={'Caracteristicas:'} text={monsterInfo.caracteristicas} />
          <Article title={'Notas:'} text={monsterInfo.notas} />
          <h3>Tamaño</h3>
          <div className="rowInformation">
            <img src={bigCrown} alt="" />
            <p>Grande: {monsterInfo.tamano_max}</p>
          </div>
          <div className="rowInformation">
            <img src={bigCrown} alt="" />
            <p>Pequeño: {monsterInfo.tamano_min}</p>
          </div>
        </>
      ) : error ? (
        <p>error.message</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

MonsterInformation.displayName = 'MonsterInformation';
