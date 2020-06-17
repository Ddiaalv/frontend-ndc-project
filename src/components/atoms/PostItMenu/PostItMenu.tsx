import * as React from 'react';
import './PostItMenu.scss';
import { Link } from 'react-router-dom';

interface PostItMenuProps {
  children: string;
  path: string;
  bgColor: string;
}

export const PostItMenu: React.FC<PostItMenuProps> = ({ children, path, bgColor }) => (
  <Link to={path}>
    <div className={`PostItMenu ${bgColor}`}>{children}</div>
  </Link>
);

PostItMenu.displayName = 'PostItMenu';
