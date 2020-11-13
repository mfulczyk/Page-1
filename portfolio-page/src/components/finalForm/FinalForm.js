import React from "react";
import "../finalForm/finalForm.scss";

const FinalForm = () => {
  return (
    <section id="finalForm">
      <div className="photo--holder">
        <div className="placeholder"></div>
        <form className="final--holder">
          <h1 className="start--header">Skontaktuj się z nami</h1>
          <div className="decoration"></div>
          <label className="form--label" htmlFor="fname">
            Wpisz swoje imię
          </label>
          <input
            placeholder="Michał"
            className="form--basic"
            type="text"
            id="fname"
            name="fname"
          ></input>
          <label className="form--label" htmlFor="lname">
            Wpisz swój e-mail
          </label>
          <input
            placeholder="abc@xyz.pl"
            className="form--basic"
            type="text"
            id="lname"
            name="lname"
          ></input>
          <label className="form--label" htmlFor="message">
            Wpisz swoją wiadomość
          </label>
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            className="form--basic"
            type="textarea"
            id="message"
            name="lname"
          ></textarea>
          <button className="btn form--btn">Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default FinalForm;
