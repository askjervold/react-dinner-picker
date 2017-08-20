import React, {Component} from "react";
import List from "../list/List";
import "./filteredLists.css";

class FilteredLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: props.dishes,
            filterName: props.filter
        }
        this.getFilterValues = this.getFilterValues.bind(this);
    }

    getFilterValues() {
        let filterValues = [];

        for (let index in this.state.dishes) {
            let dish = this.state.dishes[index];
            let value = dish[this.state.filterName];

            let newVal = true;
            for (let val in filterValues) {
                if (filterValues[val] === value) {
                    newVal = false;
                    break;
                }
            }

            if (newVal) {
                filterValues.push(value);
            }
        }

        return filterValues;
    }

    render() {
        return (
            <div className="filtered-lists">
                <h2>All dishes, sorted by <em className="filter-name">{this.props.filter}</em></h2>
                <div className="lists-container">
                {
                    this.getFilterValues()
                        .map((value, index) =>
                            <List 
                            key={index}
                            filterName={this.state.filterName}
                            filterValue={value}
                            dishes={this.state.dishes} />)
                }
                </div>
            </div>
        );
    }
}

export default FilteredLists;