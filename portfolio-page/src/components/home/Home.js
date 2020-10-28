import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Start from "../start/Start";
import HowItWorks from "../howItWorks/HowItWorks";
import About from "../about/About";
import WhoWorks from "../whoWorks/WhoWorks";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <Router>
      <div>
        <p>Routing test</p>
        <nav>
          <ul>
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
        <Route path="/start" component={Start} />
        <Route path="/howItWorks" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/whoWorks" component={WhoWorks} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Home;
