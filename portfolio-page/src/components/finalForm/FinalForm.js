import React, { useState } from "react";
import "../finalForm/finalForm.scss";

const FinalForm = () => {
  const [contentName, setContentFormName] = useState(false);
  const [contentEmail, setContentFormEmail] = useState(false);
  const [contentMessage, setContentFormMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validationCheck = (e) => {
    e.preventDefault();
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (formData.name.length > 0) {
      let name = formData.name;
      let testArr = name.split(" ");

      if (testArr.length === 1) {
        setContentFormName(false);
      } else {
        setContentFormName(true);
      }
    } else {
      setContentFormName(false);
    }

    if (formData.email.length > 0) {
      if (emailCheck) {
        setContentFormEmail(false);
      } else {
        setContentFormEmail(true);
      }
    } else {
      setContentFormEmail(false);
    }
    if (formData.message.length > 0) {
      if (formData.message.length < 120) {
        setContentFormMessage(true);
      } else {
        setContentFormMessage(false);
      }
    } else {
      setContentFormMessage(false);
    }
  };

  const nameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const emailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const messageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

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
            onChange={nameChange}
            placeholder="Michał"
            className="form--basic"
            type="text"
            id="fname"
            name="fname"
          ></input>
          {contentName === true ? (
            <p className="error--name">Podane imię jest nieprawidłowe!</p>
          ) : (
            ""
          )}
          <label className="form--label" htmlFor="lname">
            Wpisz swój e-mail
          </label>
          <input
            onChange={emailChange}
            value={formData.email}
            placeholder="abc@xyz.pl"
            className="form--basic"
            type="text"
            id="lname"
            name="lname"
          ></input>
          {contentEmail === true ? (
            <p className="error--name">Podany email jest nieprawidłowy!</p>
          ) : (
            ""
          )}
          <label className="form--label" htmlFor="message">
            Wpisz swoją wiadomość
          </label>
          <textarea
            onChange={messageChange}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            className="form--basic"
            type="textarea"
            id="message"
            name="lname"
          ></textarea>
          {contentMessage === true ? (
            <p className="error--name">
              Wiadomość musi mieć conajmniej 120 znaków!
            </p>
          ) : (
            ""
          )}
          <button onClick={validationCheck} className="btn form--btn">
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
};

export default FinalForm;
