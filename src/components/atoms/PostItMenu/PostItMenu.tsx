import * as React from 'react';
import './PostItMenu.scss';
import { Link } from 'react-router-dom';

interface PostItMenuProps {
  children: string;
  path: string;
}

export const PostItMenu: React.FC<PostItMenuProps> = ({ children, path }) => (
  <Link to={path}>
    <div className="PostItMenu">{children}</div>
  </Link>
);

PostItMenu.displayName = 'PostItMenu';
