import React, {Component} from "react";
import "./dish.css";

class Dish extends Component {
    constructor(props) {
        super(props);
        this.getNonfilteredDishInfos = this.getNonfilteredDishInfos.bind(this);
    }

    getNonfilteredDishInfos() {
        let dishProps = Object.keys(this.props.dish);
        let nonfilteredInfoProps = [];

        dishProps.forEach((propName) => {
            if (propName !== "name" && propName !== this.props.filterName) {
                nonfilteredInfoProps.push(propName);
            }
        });

        return nonfilteredInfoProps;
    }

    render() {
        return (
            <div className="dish">
                <div className="dish-name">{this.props.dish.name}</div>
                {
                    this.getNonfilteredDishInfos()
                        .map((key, index) =>
                            <span key={index} className="dish-info">{key}: {this.props.dish[key]}</span>
                        )
                }
            </div>
        );
    }
}

export default Dish;