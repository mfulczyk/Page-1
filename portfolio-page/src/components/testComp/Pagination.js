import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

const PER_PAGE = 3;

const Pagination = ({ display, changeDisplay, num, setNum }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(display);
  console.log(num);
  useEffect(() => {
    setData(display);
  }, [display]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);
  const currentPageData = (
    <>
      {data.slice(offset, offset + PER_PAGE).map((el, index) => (
        <ul key={index} className="whoWorks--ul">
          <li className="whoworks--name">{el.name}</li>
          <li className="whoworks--what">{el.what}</li>
          <li className="whoworks--mission">{el.mission}</li>
          <div className="gray--line"></div>
        </ul>
      ))}
      <ReactPaginate
        forcePage={num}
        previousLabel={""}
        disableInitialCallback={true}
        nextLabel={""}
        // jak moge zifowac pagecount
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link pagination--item"}
        nextLinkClassName={"pagination__link pagination--item"}
        disabledClassName={"pagination__link--disabled pagination--item"}
        activeClassName={"pagination__link--active pagination--item"}
      />
    </>
  );

  return (
    <section className="whoworks--section pagination--section">
      <div className="whoworks-holder button--holder">
        <button onClick={changeDisplay} id={1} className="btn whoworks-btn">
          Fundacjom
        </button>
        <button onClick={changeDisplay} id={2} className="btn whoworks-btn">
          Organizacjom pozarządowym
        </button>
        <button id={3} onClick={changeDisplay} className="btn whoworks-btn">
          Lokalnym zbiórkom
        </button>
      </div>
      <span className="whoworks-text start--text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </span>
      {currentPageData}
    </section>
  );
};
export default Pagination;
