import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//react-device-detect
// Detect device type and render your component according to it
// moze zwracac rozne komponenty w zaleznosci od tego co jest wykryte
import Home from "./components/home/Home";
import LogScreen from "./components/logScreen/LogScreen";
import SignScreen from "./components/signScreen/SignScreen";
// tutaj zrobic routing a w home zrobic scrolla

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route className="wrapper" path="/home" component={Home} />
          <Route path="/logscreen" component={LogScreen} />
          <Route path="/signscreen" component={SignScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
