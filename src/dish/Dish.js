import React, {Component} from "react";
import "./dish.css";

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish,
            filterName: props.filterName
        }
        this.getNonfilteredDishInfos = this.getNonfilteredDishInfos.bind(this);
    }

    getNonfilteredDishInfos() {
        let dishProps = Object.keys(this.state.dish);
        let nonfilteredInfoProps = [];

        dishProps.forEach((propName) => {
            if (propName !== "name" && propName !== this.state.filterName) {
                nonfilteredInfoProps.push(propName);
            }
        });

        return nonfilteredInfoProps;
    }

    render() {
        return (
            <div className="dish">
                <div className="dish-name">{this.state.dish.name}</div>
                {
                    this.getNonfilteredDishInfos()
                        .map((key, index) =>
                            <span key={index} className="dish-info">{key}: {this.state.dish[key]}</span>
                        )
                }
            </div>
        );
    }
}

export default Dish;