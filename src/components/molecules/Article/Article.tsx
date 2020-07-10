import * as React from 'react';
import './Article.scss';

interface ArticleProps {
  title: string;
  text: string;
}

export const Article: React.FC<ArticleProps> = ({ title, text }) => (
  <article className="Article">
    <h3>{title}</h3>
    <p>{text}</p>
  </article>
);

Article.displayName = 'Article';
