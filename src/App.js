import React, { Component } from 'react';
import './App.css';
import FilteredList from "./filteredLists/FilteredLists";
import dishes from "./resources/dishes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's for dinner?</h2>
        </div>
        <FilteredList dishes={dishes} filter="protein" />
      </div>
    );
  }
}

export default App;
