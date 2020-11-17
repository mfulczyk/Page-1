import React, { useState } from "react";
import Header from "../header/Header";
import "./logscreen.scss";
import { Link as LinkRouter } from "react-router-dom";

const LogScreen = () => {
  const [logData, setLogData] = useState({ email: "", password: "" });
  const [contentLog, setContentLog] = useState(false);
  const [contentPass, setContentPass] = useState(false);

  const changeHandlerEmail = (e) => {
    setLogData({ ...logData, email: e.target.value });
  };
  const changeHandlerPass = (e) => {
    setLogData({ ...logData, password: e.target.value });
  };

  const validationCheck = () => {
    let passCheck = logData;
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(logData.email);
    if (passCheck.password.length < 6) {
      setContentPass(true);
    } else {
      setContentPass(false);
    }
    if (emailCheck) {
      setContentLog(false);
    } else {
      setContentLog(true);
    }
  };

  return (
    <>
      <Header />
      <section className="section--log">
        <h1 className="start--header">Zaloguj się</h1>
        <div className="decoration"></div>
        <form className="final--holder log--form">
          <label className="form--label" htmlFor="email-log">
            Email
          </label>
          <input
            onChange={changeHandlerEmail}
            value={logData.email}
            placeholder=""
            className="form--basic"
            type="email"
            id="email"
            name="email-log"
          ></input>
          {contentLog === true ? (
            <p className="error--name">Podany email jest nieprawidłowy!</p>
          ) : (
            ""
          )}
          <label className="form--label" htmlFor="password-log">
            Hasło
          </label>
          <input
            onChange={changeHandlerPass}
            value={logData.password}
            placeholder=""
            className="form--basic"
            type="password"
            id="password"
            name="password-log"
          ></input>
          {contentPass === true ? (
            <p className="error--name">Podane hasło jest za krótkie!</p>
          ) : (
            ""
          )}
        </form>
        <div className="btn--holder">
          <button className="btn form--btn log--btn" onClick={validationCheck}>
            Zaloguj się
          </button>
          <LinkRouter to="SignScreen">
            <button className="btn form--btn log--btn">Załóż konto</button>
          </LinkRouter>
        </div>
      </section>
    </>
  );
};

export default LogScreen;
