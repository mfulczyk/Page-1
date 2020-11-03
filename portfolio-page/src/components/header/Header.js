import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../header/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <ul className="header--nav primary">
          <li>
            <Link to="/logScreen">Zaloguj</Link>
          </li>
          <li>
            <Link to="/SignScreen">Załóż konto</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="header--nav secondary">
          <li>
            <Link to="/start">Start</Link>
          </li>
          <li>
            <Link to="/howItWorks">O co chodzi?</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/whoWorks">Fundacje i organizacje</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
