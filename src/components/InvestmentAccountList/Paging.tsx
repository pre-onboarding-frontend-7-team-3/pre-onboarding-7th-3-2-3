import React from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({totalCount, postPerPage, pageRangeDisplay,  page, setPage}) => {

  const handlePageChange = (page:number) => {setPage(page)}
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={totalCount ? totalCount : 0}
      pageRangeDisplayed={pageRangeDisplay}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;