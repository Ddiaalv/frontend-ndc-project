import * as React from 'react';
import './Pagination.scss';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    pageNumbers.push(page);
  }

  return (
    <div className="Pagination">
      {pageNumbers.map((pageNumber) => (
        <div className="Page" onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </div>
      ))}
    </div>
  );
};

Pagination.displayName = 'Pagination';
