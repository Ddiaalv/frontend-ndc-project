import * as React from 'react';
import './MonsterInformation.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GetFetchData } from '../../../utils/hooks/GetFetchData';

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
        <p>hola: {data.nombre}</p>
      ) : error ? (
        <p>error.message</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

MonsterInformation.displayName = 'MonsterInformation';
