import React from "react";
import "./home.scss";

// Detect device type and render your component according to it
// moze zwracac rozne komponenty w zaleznosci od tego co jest wykryte
import Start from "../start/Start";
import HowItWorks from "../howItWorks/HowItWorks";
import About from "../about/About";
import WhoWorks from "../whoWorks/WhoWorks";
import Header from "../header/Header";
import FinalForm from "../finalForm/FinalForm";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Start />
      <HowItWorks />
      <About />
      <WhoWorks />
      <FinalForm />
    </div>
  );
};

export default Home;
