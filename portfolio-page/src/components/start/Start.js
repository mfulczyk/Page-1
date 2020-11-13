import React from "react";
import "../start/Start.scss";

const Start = () => {
  return (
    <main id="start">
      <section className="start--section">
        <div className="start--pic" />
        {/* daj jako backgorund do calej sekji zeby nie ogarniczal komponentow przy zwijaniu strony */}
        {/* te przelaczenie to na useState plik JSON zeby to pobieral stamtąd */}
        {/* odczytuj i pokazuj 3 elementy z 9 potem pokazujemy dalej (przykladowo na modulo czy cośtam) */}
        {/* napisac paginacje albo pokorzystac z bibliotek (klient placi za efekt a nie za to ile poswiecisz czasu ) */}
        <div className="start--holder">
          <h1 className="start--header">Zacznij pomagać!</h1>
          <h1 className="start--header">
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <div className="decoration"></div>
          <div className="button--holder">
            <button className="btn">
              ODDAJ
              <br />
              RZECZY
            </button>
            <button className="btn">
              ZORGANIZUJ
              <br />
              ZBIÓRKĘ
            </button>
          </div>
        </div>
      </section>
      <section className="start--section triple--collumns">
        <article className="start--article article">
          <h2 className="bigNumber">10</h2>
          <h3 className="bigText">ODDANYCH WORKÓW</h3>
          <span className="start--text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
        <article className="start--article article">
          <h2 className="bigNumber">5</h2>
          <h3 className="bigText">WSPARTYCH ORGANIZACJI</h3>
          <span className="start--text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
        <article className="start--article article">
          <h2 className="bigNumber">7</h2>
          <h3 className="bigText">ZORGANIZOWANY ZBIÓREK</h3>
          <span className="start--text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
      </section>
    </main>
  );
};

export default Start;
