import * as React from 'react';
import './MonsterIcon.scss';
import img from '../../../../public/img/monster/icon/monster-icon.jpg';

interface MonsterIconProps {
  name: string;
}

export const MonsterIcon: React.FC<MonsterIconProps> = ({ name }) => {
  return (
    <div className="MonsterIcon">
      <img
        src={process.env.PUBLIC_URL + `/img/monster/icon/icon${name}.png`}
        alt={`icono del monstruo ${name}`}
      />
    </div>
  );
};

MonsterIcon.displayName = 'MonsterIcon';
