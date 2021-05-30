import React from "react";

import PostListItem from "../post-list-item/post-list-item";

const PostList = (props) => {

    const {posts, onDelete} = props;

    const isEmpty = (object) => {
        for (let key in object) {
            if(key == "label") {
                return true;
            }
        }
        return false;
    };

    const element = posts.map((item) => {
        if (typeof item === "object" && isEmpty(item)) {
            const {label, id} = item;
            return (
                <li className="list-item" key={id} data-list={id}>
                    <PostListItem label={label} onDelete={() => onDelete(id)}/>
                </li>
            );
        }
    });

    return (
        <ul className="list">
            {element}
        </ul>
    );
};

export default PostList;