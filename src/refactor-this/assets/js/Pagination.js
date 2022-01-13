import React from "react";
import { useAppContext } from "./App.context";

const Pagination = () => {
  const {page, setPage} = useAppContext();

  const handleNextPage = () => {
    setPage(page + 1);
  }

  const handlePrevPage = () => {
    if(page !== 1) {
      setPage(page - 1);
    }
  }

  return(
    <nav>
      <ul className="pagination">
        <li className="page-item"><a className="page-link" onClick={() => handlePrevPage()}>Previous</a></li>
        <li className="page-item"><a className="page-link" onClick={() => handleNextPage()}>Next</a></li>
      </ul>
    </nav>
  )
}

export default Pagination;
