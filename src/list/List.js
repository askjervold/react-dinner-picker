import React, {Component} from "react";
import "./list.css";

const Dish = ({
    name,
    protein,
    category,
    time
}) =>
    <li>
        <div className="dish-name">{name}</div>
        <div className="protein">{protein}</div>
        <div className="category">{category}</div>
        <div className="time">{time}</div>
    </li>;

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
                            .map((dish, index) => <Dish key={index} {...dish} />)
                    }
                </ul>
            </div>
        );
    }
}

export default List;