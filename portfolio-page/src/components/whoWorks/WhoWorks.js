import React, { useState } from "react";
import "./whoworks.scss";
import Pagination from "../testComp/Pagination";

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
    {
      name: `Fundacja “Lorem 4"`,
      mission:
        "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      what: "ubrania, jedzenie, ciepłe koce",
    },
    {
      name: `Fundacja “Lorem 5"`,
      mission:
        "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      what: "ubrania, jedzenie, ciepłe koce",
    },
    {
      name: `Fundacja “Lorem 6"`,
      mission:
        "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      what: "ubrania, jedzenie, ciepłe koce",
    },
    {
      name: `Fundacja “Lorem 7"`,
      mission:
        "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
      what: "ubrania, jedzenie, ciepłe koce",
    },
    {
      name: `Fundacja “Lorem 8"`,
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
    {
      name: `Organizacja "Lorem Ipsum 4"`,
      mission: "Scelerisque in dictum non consectetur a erat nam.",
      what: "Mi, quis, hendrerit, dolor",
    },
    {
      name: `Organizacja "Lorem Ipsum 5"`,
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
  const [num, setNum] = useState(0);

  const changeDisplay = (event) => {
    if (event.target.id === "1") {
      setDisplay(foundationsInfo);
    }
    if (event.target.id === "2") {
      setDisplay(organizationInfo);
    }
    if (event.target.id === "3") {
      setDisplay(localInfo);
    }
  };
  return (
    <section id="whoWorks" className="whoworks--section">
      <h1 className="whoworks--header start--header">Komu pomagamy?</h1>
      <div className="decoration"></div>
      <Pagination
        display={display}
        changeDisplay={changeDisplay}
        num={num}
        setNum={setNum}
        currPage={0}
      />
    </section>
  );
};

export default WhoWorks;
