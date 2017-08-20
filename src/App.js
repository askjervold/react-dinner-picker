import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's for dinner?</h2>
        </div>
        <h3>See all dishes, sorted by:</h3>
        <ul>
            <li><Link to={"/protein"}>protein</Link></li>
            <li><Link to={"/category"}>category</Link></li>
            <li><Link to={"/time"}>time</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
