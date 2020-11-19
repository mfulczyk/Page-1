import React from "react";
import { Link } from "react-scroll";
import "../header/Header.scss";
import { Link as LinkRouter } from "react-router-dom";

function Header() {
  return (
    <header className="header-section">
      <nav>
        <ul className="header--nav primary">
          <li>
            <LinkRouter to="logScreen">Zaloguj</LinkRouter>
          </li>
          <li>
            <LinkRouter to="SignScreen">Załóż konto</LinkRouter>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="header--nav secondary">
          <li>
            <LinkRouter to="Home">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="start"
              >
                Start
              </Link>
            </LinkRouter>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="howItWorks"
            >
              O co chodzi?
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="about"
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="whoWorks"
            >
              Fundacje i organizacje
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="finalForm"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
