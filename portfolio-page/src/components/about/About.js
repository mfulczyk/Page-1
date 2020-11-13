import React from "react";
import "../about/about.scss";

const About = () => {
  return (
    <section id="about" className="about--section">
      <article className="about--article">
        <h1 className="start--header">O nas</h1>
        <div className="decoration"></div>
        <span className="about--text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </span>
        <div className="signature"></div>
      </article>
      <div className="picture--holder"></div>
    </section>
  );
};

export default About;
