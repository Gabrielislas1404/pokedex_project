import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import { Switch, Route } from 'react-router-dom';

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
