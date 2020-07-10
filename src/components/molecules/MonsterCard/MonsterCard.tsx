import * as React from 'react';
import './MonsterCard.scss';

interface MonsterCardProps {
  name: string;
  nameRoute: string;
  type: string;
  species: string;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({
  name,
  type,
  species,
  nameRoute,
}) => (
  <div className="MonsterCard">
    <img
      src={process.env.PUBLIC_URL + `/img/monster/icon/icon${nameRoute}.png`}
      alt={`icono del monstruo ${name}`}
    />
    <p>{name}</p>
    <p>{species}</p>
    <p>{type}</p>
  </div>
);

MonsterCard.displayName = 'MonsterCard';
