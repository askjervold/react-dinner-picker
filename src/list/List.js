import React, {Component} from "react";

const Dish = ({
    name,
    protein,
    category,
    time
}) =>
    <li>
        <span className="dishName">{name}</span>
        <span className="protein">{protein}</span>
        <span className="category">{category}</span>
        <span className="time">{time}</span>
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