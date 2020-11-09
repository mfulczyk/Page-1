import React from "react";
import "../home/home.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
// uzyc scroll linka zeby przemieszal po stronie
// poczytac se dokumentacje z react scroll
//react-device-detect
// Detect device type and render your component according to it
// moze zwracac rozne komponenty w zaleznosci od tego co jest wykryte
import Start from "../start/Start";
import HowItWorks from "../howItWorks/HowItWorks";
import About from "../about/About";
import WhoWorks from "../whoWorks/WhoWorks";
import Contact from "../contact/Contact";
import SignScreen from "../signScreen/SignScreen";
import LogScreen from "../logScreen/LogScreen";
import Header from "../header/Header";
import FinalForm from "../finalForm/FinalForm";

const Home = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Start />
        <HowItWorks />
        <About />
        <WhoWorks />
        <FinalForm />
        <Route path="/start" component={Start} />
        <Route path="/howItWorks" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/whoWorks" component={WhoWorks} />
        <Route path="/contact" component={Contact} />
        <Route path="/logScreen" component={LogScreen} />
        <Route path="/SignScreen" component={SignScreen} />
      </Router>
    </div>
  );
};

export default Home;
