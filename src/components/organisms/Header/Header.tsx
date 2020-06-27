import * as React from 'react';
import './Header.scss';
import { PostItMenu } from '../../atoms/PostItMenu';
import { ROUTE } from '../../../utils/routes';

export const Header: React.FC<{}> = () => {
  const menuValues = [
    { name: 'inicio', color: 'pink', route: ROUTE.home },
    { name: 'armas', color: 'yellow', route: ROUTE.weapons },
    { name: 'armaduras', color: 'blue', route: ROUTE.armors },
    { name: 'felyne', color: 'green', route: ROUTE.felyne },
    { name: 'monsters', color: 'pink', route: ROUTE.monsters.primary },
  ];

  const hideMenu = () => {
    const x = document.querySelector('nav');
    if (x !== null) {
      if (x.style.display === 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    }
  };

  return (
    <header className="Header">
      <div id="menu" onClick={hideMenu}>
        X
      </div>
      <nav style={{ display: 'true' }}>
        {menuValues.map((menu, index) => (
          <PostItMenu
            key={index}
            path={menu.route}
            children={menu.name}
            bgColor={menu.color}
          />
        ))}
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
