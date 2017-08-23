import React, { Component } from 'react';
import "./randomDish.css";
import Dish from "../dish/Dish";

class RandomDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: props.dishes,
            randomDish: {}
        }
        this.getRandomDish = this.getRandomDish.bind(this);
        this.updateRandomDish = this.updateRandomDish.bind(this);
    }

    componentDidMount() {
        this.updateRandomDish();
    }

    getRandomDish() {
        let dishes = this.state.dishes;
        let min = Math.ceil(0);
        let max = Math.floor(dishes.length);
        return dishes[Math.floor(Math.random() * (max - min)) + min];
    }

    updateRandomDish() {
        this.setState({randomDish: this.getRandomDish()});
    }
    
    render() {
        return (
            <div className="random-dish">
                <h2>How about...</h2>
                <Dish dish={this.state.randomDish}/>
                <button onClick={() => this.updateRandomDish()}>No thanks</button>
            </div>
        );
    }
}

export default RandomDish;