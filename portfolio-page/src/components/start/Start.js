import React from "react";
import "../start/Start.scss";

const Start = () => {
  return (
    <main>
      <section className="start--section">
        <div className="start--pic" />
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
      <section className="start--section">
        <article>
          <h2>10</h2>
          <h3>ODDANYCH WORKÓW</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
        <article>
          <h2>10</h2>
          <h3>ODDANYCH WORKÓW</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
        <article>
          <h2>10</h2>
          <h3>ODDANYCH WORKÓW</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </article>
      </section>
    </main>
  );
};

export default Start;
