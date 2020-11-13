import React from "react";
import "../howItWorks/howItWorks.scss";

const HowItWorks = () => {
  return (
    <section id="howItWorks" className="howitworks--section">
      <h1 className="howitworks--header">Wystarczą 4 proste kroki</h1>
      <div className="decoration"></div>
      <div className="box gray">
        <article className="howitworks--article">
          <div className="icon--holder"></div>
          <h5 className="howitworks--smallHeader">Wybierz rzeczy</h5>
          <div className="simple--decoration"></div>
          <span>ubrania, zabawki, sprzęt i inne</span>
        </article>
        <article className="howitworks--article">
          <div className="icon--holder"></div>
          <h5 className="howitworks--smallHeader">Spakuj je</h5>
          <div className="simple--decoration"></div>
          <span>skorzystaj z worków na śmieci</span>
        </article>
        <article className="howitworks--article">
          <div className="icon--holder"></div>
          <h5 className="howitworks--smallHeader">
            Zdecyduj komu chcesz pomóc
          </h5>
          <div className="simple--decoration"></div>
          <span>wybierz zaufane miejsce</span>
        </article>
        <article className="howitworks--article">
          <div className="icon--holder"></div>
          <h5 className="howitworks--smallHeader">Zamów kuriera</h5>
          <div className="simple--decoration"></div>
          <span>kurier przyjedzie w dogodnym terminie</span>
        </article>
      </div>
      <button className="btn howitworks--btn">ODDAJ RZECZY</button>
    </section>
  );
};

export default HowItWorks;
