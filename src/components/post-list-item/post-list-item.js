import React, {Component} from "react";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {label, important, completed, onDelete, onCompleted, onImportant} = this.props;
        
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
                    onClick={onCompleted}
                />
                <span className={textClasses}>{label}</span>
                <button 
                    className="list-item__favourite list-button"
                    onClick={onImportant}
                >
                    <i className={starClasses}></i>
                </button>
                <button 
                    className="list-item__cross list-button"
                    onClick={onDelete}
                >
                    <i className="fa fa-times fa-fw"></i>
                </button>
            </div>
        );
        
    }
}