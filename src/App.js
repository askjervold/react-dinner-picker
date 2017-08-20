import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's for dinner?</h2>
          <nav className="sort">
            <ul>
                <li><Link to={"/protein"} title="Sort by protein">protein</Link></li>
                <li><Link to={"/category"} title="Sort by category">category</Link></li>
                <li><Link to={"/time"} title="Sort by time">time</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
