import * as React from 'react';
import './Pagination.scss';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let page = 1; page <= totalPages; page++) {
    pageNumbers.push(page);
  }

  return (
    <div className="Pagination">
      <div className="Page" onClick={() => paginate(1)}>
        First page
      </div>
      <div className="Page" onClick={() => paginate(currentPage - 1)}>
        Previous page
      </div>
      {/* {pageNumbers.map((pageNumber, index) => (
        <div className="Page" key={index} onClick={() => paginate(pageNumber)}>
          {pageNumber}
        </div>
      ))} */}
      {currentPage}/{totalPages}
      <div className="Page" onClick={() => paginate(currentPage + 1)}>
        Next page
      </div>
      <div className="Page" onClick={() => paginate(totalPages)}>
        Last page
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';
