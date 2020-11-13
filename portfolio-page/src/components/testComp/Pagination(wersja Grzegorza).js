import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

const PER_PAGE = 3;

const Pagination = ({ display, changeDisplay, num, setNum, currPage }) => {
  const [currentPage, setCurrentPage] = useState(currPage);
  const [currentPage2, setCurrentPage2] = useState(0);
  const [data, setData] = useState(display);
  const [offset, setOffset] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setData(display);
  }, [display]);

  useEffect(() => {
    setOffset(currentPage * PER_PAGE);
    setPageCount(Math.ceil(data.length / PER_PAGE));
  }, [currPage]);

  useEffect(() => {
    console.log(currentPage, currPage);
    setOffset(currentPage * PER_PAGE);
    setPageCount(Math.ceil(data.length / PER_PAGE));
  }, [currentPage]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  // const currentPageData = (
  //   <>
  //     {data.slice(offset, offset + PER_PAGE).map((el, index) => (
  //       <ul key={index} className="whoWorks--ul">
  //         <li className="whoworks--name">{el.name}</li>
  //         <li className="whoworks--what">{el.what}</li>
  //         <li className="whoworks--mission">{el.mission}</li>
  //         <div className="gray--line"></div>
  //       </ul>
  //     ))}
  //     <ReactPaginate
  //       forcePage={num}
  //       previousLabel={""}
  //       disableInitialCallback={true}
  //       nextLabel={""}
  //       // jak moge zifowac pagecount
  //       pageCount={pageCount}
  //       onPageChange={handlePageClick}
  //       containerClassName={"pagination"}
  //       previousLinkClassName={"pagination__link pagination--item"}
  //       nextLinkClassName={"pagination__link pagination--item"}
  //       disabledClassName={"pagination__link--disabled pagination--item"}
  //       activeClassName={"pagination__link--active pagination--item"}
  //     />
  //   </>
  // );

  return (
    <section className="whoworks--section pagination--section">
      <h1>{offset}</h1>
      <h1>{pageCount}</h1>
      <h1>{data.length}</h1>
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
    </section>
  );
};
export default Pagination;
