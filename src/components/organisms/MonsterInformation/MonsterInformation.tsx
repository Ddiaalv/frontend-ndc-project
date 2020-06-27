import * as React from 'react';
import './MonsterInformation.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface MonsterState {
  id_monstruo: number;
  orden_menu: number;
  nombre: string;
  ruta: string;
  especie: string;
  tipo: string;
  rango: string;
  caracteristicas: string;
  notas: string;
  tamano_min: number;
  tamano_max: number;
  fuego: number;
  agua: number;
  rayo: number;
  hielo: number;
  draco: number;
  veneno: number;
  sueno: number;
  paralisis: number;
  nitro: number;
  aturdimiento: number;
  elemento01: string;
  elemento02: string;
  resistencia01: string;
  resistencia02: string;
  resistencia03: string;
  estado01: string;
  estado02: string;
  estado03: string;
}

export const MonsterInformation: React.FC<{}> = () => {
  const [monster, setMonster] = useState<MonsterState | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);
  const { monster: urlParam } = useParams();

  useEffect(() => {
    fetch(`https://backend-nodeca.herokuapp.com/monstruo/${urlParam}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMonster(result[0]);
        },
        (error) => {
          setIsLoaded(true);
        },
      );
  }, [urlParam]);

  if (isLoaded && monster !== undefined) {
    return (
      <div className="MonsterInformation">
        <p>hola: {monster.nombre}</p>
      </div>
    );
  } else {
    return <div className="MonsterInformation">Cargando...</div>;
  }
};

MonsterInformation.displayName = 'MonsterInformation';
