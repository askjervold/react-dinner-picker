import React, {Component} from "react";
import "./list.css";
import Dish from "../dish/Dish";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: props.dishes,
            filterName: props.filterName,
            filterValue: props.filterValue
        }
        this.filterDishes = this.filterDishes.bind(this);
    }

    filterDishes(dish) {
        return dish[this.state.filterName] === this.state.filterValue;
    }

    render() {
        return (
            <div className="list">
                <h3>{this.props.filterValue}</h3>
                <ul>
                    {
                        this.state.dishes
                            .filter(this.filterDishes)
                            .map((dish, index) => 
                                <li className="dish" key={index}>
                                    <Dish dish={dish} filterName={this.state.filterName} />
                                </li>
                            )
                    }
                </ul>
            </div>
        );
    }
}

export default List;