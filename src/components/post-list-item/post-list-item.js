import React, {Component} from "react";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            completed: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
    }

    onImportant() {
        this.setState((state) => ({
            important: !state.important
        }));
    }

    onCompleted() {
        this.setState((state) => ({
            completed: !state.completed
        }));
    }

    render() {

        const {label} = this.props;
        const {important, completed} = this.state;
        
        let starClasses = "fa fa-star fa-fw";
        let checkClasses = "list-item__complete";
        let textClasses = "list-item__text";
        if (important) {
            starClasses += " fa-star_active";
            textClasses += " list-item__text_important";
        }
        if (completed) {
            checkClasses += " list-item__complete_active";
            textClasses += " list-item__text_completed";
        }

        return (
            <div className="list-item__wrapper">
                <button 
                className={checkClasses}
                onClick={this.onCompleted}/>
                <span className={textClasses}>{label}</span>
                <button 
                className="list-item__favourite list-button"
                onClick={this.onImportant}>
                    <i className={starClasses}></i>
                </button>
                <button className="list-item__cross list-button">
                    <i className="fa fa-times fa-fw"></i>
                </button>
            </div>
        );
        
    }
}
