import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { Ideas } from "./components/Ideas";
import { Getaways } from "./components/Getaways";
import Feelings from "./components/Feelings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="nav">
            <Link to="/ideas">
              <li>Valentines Ideas</li>
            </Link>
            <Link to="/getaways">
              <li>Romantic Getaways</li>
            </Link>
            <Link to="/feelings">
              <li>Ways to show your true feelings</li>
            </Link>
          </ul>
        </header>

        <Route path="/ideas" component={Ideas} />
        <Route path="/getaways" component={Getaways} />
        <Route exact path="/feelings" component={Feelings} />
      </div>
    );
  }
}

export default App;
