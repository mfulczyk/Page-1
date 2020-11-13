import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// uzyc scroll linka zeby przemieszal po stronie
// poczytac se dokumentacje z react scroll
//react-device-detect
// Detect device type and render your component according to it
// moze zwracac rozne komponenty w zaleznosci od tego co jest wykryte
import Home from "./components/home/Home";
// tutaj zrobic routing a w home zrobic scrolla

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
