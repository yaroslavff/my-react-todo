import React from "react";

const PostListItem = () => {
    return (
        <li className="list-item">
            <button className="list-item__completed list-button">
                <i className="fa fa-check-circle fa-2x"></i>
            </button>
            <span className="list-item__text">Hello world!</span>
            <button className="list-item__favourite list-button">
                <i className="fa fa-star fa-fw"></i>
            </button>
            <button className="list-item__cross list-button">
                <i className="fa fa-times fa-fw"></i>
            </button>
        </li>
    );
};

export default PostListItem;