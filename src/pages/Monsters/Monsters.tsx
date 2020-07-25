import * as React from 'react';
import { Route } from 'react-router-dom';
import './Monsters.scss';
import { MonsterSelector } from '../../components/monsters/MonsterSelector';
import { ROUTE } from '../../utils/routes';
import { MonsterInformation } from '../../components/monsters/MonsterInformation';

export const Monsters: React.FC<{}> = () => (
  <div className="Monsters">
    <MonsterSelector />
    <Route path={ROUTE.monsters.secondary} component={MonsterInformation} />
  </div>
);

Monsters.displayName = 'Monsters';
