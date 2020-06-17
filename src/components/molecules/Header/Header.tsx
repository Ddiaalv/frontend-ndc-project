import * as React from 'react';
import './Header.scss';
import { PostItMenu } from '../../atoms/PostItMenu';
import { ROUTE } from '../../../utils/routes';

export const Header: React.FC<{}> = () => {
  const menuValues = [
    { name: 'inicio', route: ROUTE.home },
    { name: 'armas', route: ROUTE.weapons },
    { name: 'armaduras', route: ROUTE.armors },
    { name: 'felyne', route: ROUTE.felyne },
    { name: 'monsters', route: ROUTE.monsters },
  ];
  return (
    <header className="Header">
      {menuValues.map((menu) => (
        <PostItMenu path={menu.route} children={menu.name} />
      ))}
    </header>
  );
};

Header.displayName = 'Header';
