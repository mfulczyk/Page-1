import React, { useState } from "react";
import "./whoworks.scss";

const WhoWorks = () => {
  const foundationsInfo = [
    {
      name: `Fundacja “Dbam o Zdrowie"`,
      mission:
        "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      what: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
      name: `Fundacja “Dla dzieci"`,
      mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
      what: "ubrania, meble, zabawki",
    },
    {
      name: `Fundacja “Bez domu"`,
      mission:
        "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      what: "ubrania, jedzenie, ciepłe koce",
    },
  ];

  const organizationInfo = [
    {
      name: `Organizacja "Lorem Ipsum 1"`,
      mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      what: "Egestas, sed, tempus",
    },
    {
      name: `Organizacja "Lorem Ipsum 2"`,
      mission:
        "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      what: "Ut, aliquam, purus, sit, amet",
    },
    {
      name: `Organizacja "Lorem Ipsum 3"`,
      mission: "Scelerisque in dictum non consectetur a erat nam.",
      what: "Mi, quis, hendrerit, dolor",
    },
  ];

  const localInfo = [
    {
      name: `Zbiórka “Lorem Ipsum 1”`,
      mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      what: "Egestas, sed, tempus",
    },
    {
      name: `Zbiórka “Lorem Ipsum 2”`,
      mission:
        "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      what: "Ut, aliquam, purus, sit, amet",
    },
    {
      name: `Zbiórka “Lorem Ipsum 3”"`,
      mission: "Scelerisque in dictum non consectetur a erat nam.",
      what: "Mi, quis, hendrerit, dolor",
    },
  ];

  const [display, setDisplay] = useState(foundationsInfo);

  const changeDisplay = (event) => {
    if (event.target.innerText === "Fundacjom") {
      setDisplay(foundationsInfo);
    }
    if (event.target.innerText === "Organizacjom pozarządowym") {
      setDisplay(organizationInfo);
    }
    if (event.target.innerText === "Lokalnym zbiórkom") {
      setDisplay(localInfo);
    }
  };

  return (
    <section className="whoworks--section">
      <h1 className="whoworks--header start--header">Komu pomagamy?</h1>
      <div className="decoration"></div>
      <div className="whoworks-holder button--holder">
        <button onClick={changeDisplay} className="btn whoworks-btn">
          Fundacjom
        </button>
        <button
          onClick={changeDisplay}
          id="button1"
          className="btn whoworks-btn"
        >
          Organizacjom pozarządowym
        </button>
        <button onClick={changeDisplay} className="btn whoworks-btn">
          Lokalnym zbiórkom
        </button>
      </div>
      <span className="whoworks-text start--text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </span>
      <div className="ul--holder">
        {display.map((el, index) => (
          <ul className="whoWorks--ul" key={index}>
            <li className="whoworks--name">{el.name}</li>
            <li className="whoworks--what">{el.what}</li>
            <li className="whoworks--mission">{el.mission}</li>
            <div className="gray--line"></div>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default WhoWorks;
