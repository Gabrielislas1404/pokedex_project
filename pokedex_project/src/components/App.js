import React from "react";
import { Route, Switch } from "react-router-dom";
import "../index.css";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
