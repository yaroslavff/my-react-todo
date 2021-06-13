import React, {Component} from "react";

export default class PostStatusFilter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filter: "all"
        }
    }

    updateStatus = (e) => {
        const newFilter = e.target.value;
        this.setState(({filter: newFilter}));
        this.props.updateFilter(newFilter);
    }

    changeActiveClass = (value) => {
        let buttonClasses = `btn-group__${value}`;
        const active = value === this.state.filter;
        buttonClasses += active ? " btn-group_active" : " btn";
        return buttonClasses;
    }

    render() {

        return (
            <>
            <span className="btn-header">Категории:</span>
            <div className="btn-group btn-group__search">
                <button
                    type="button"
                    value="all"
                    className={`js-btn-search ${this.changeActiveClass("all")}`}
                    onClick={this.updateStatus}
                >Все</button>
                <button 
                    type="button"
                    value="important"
                    className={`js-btn-search ${this.changeActiveClass("important")}`}
                    onClick={this.updateStatus}
                >Важные</button>
                <button
                    type="button"
                    value="completed"
                    className={`js-btn-search ${this.changeActiveClass("completed")}`}
                    onClick={this.updateStatus}
                >Выполненные</button>
            </div>
            </>
        );
    }
}