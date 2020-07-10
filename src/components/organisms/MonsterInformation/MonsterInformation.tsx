import * as React from 'react';
import './MonsterInformation.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GetFetchData } from '../../../utils/hooks/GetFetchData';
import { MonsterCard } from '../../molecules/MonsterCard';
import bigCrown from '../../../assets/big-crown.png';
import { Article } from '../../molecules/Article';

export const MonsterInformation: React.FC<{}> = () => {
  const { monster: urlParam } = useParams();
  const { data, isLoaded, error, getObjectData } = GetFetchData();

  useEffect(() => {
    const URL = `https://backend-nodeca.herokuapp.com/monstruo/${urlParam}`;
    getObjectData(URL);
  }, [urlParam]);

  return (
    <div className="MonsterInformation">
      {isLoaded && data !== undefined ? (
        <>
          <h2>Ecología</h2>
          <MonsterCard
            name={data.nombre}
            nameRoute={data.ruta}
            species={data.especie}
            type={data.tipo}
          />
          <Article title={'Caracteristicas:'} text={data.caracteristicas} />
          <Article title={'Notas:'} text={data.notas} />
          <h3>Tamaño</h3>
          <div className="rowInformation">
            <img src={bigCrown} alt="" />
            <p>Grande: {data.tamano_max}</p>
          </div>
          <div className="rowInformation">
            <img src={bigCrown} alt="" />
            <p>Pequeño: {data.tamano_min}</p>
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
