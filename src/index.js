import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilteredList from "./filteredLists/FilteredLists";
import dishes from "./resources/dishes.js";

ReactDOM.render((
    <Router history={Router}>
        <div className="route-wrapper">
            <Route path="/" component={App}/>
            <Route path="/protein" render={()=><FilteredList filter="protein" dishes={dishes} />}/>
            <Route path="/category" render={()=><FilteredList filter="category" dishes={dishes} />}/>
            <Route path="/time" render={()=><FilteredList filter="time" dishes={dishes} />}/>
        </div>
    </Router>
), document.getElementById('root'));