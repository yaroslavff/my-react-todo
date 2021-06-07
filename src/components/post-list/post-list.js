import React from "react";

import PostListItem from "../post-list-item/post-list-item";

const PostList = (props) => {

    const {posts, onDelete, onImportant, onCompleted} = props;

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
            const {id, ...itemProps} = item;
            return (
                <li className="list-item" key={id} data-list={id}>
                    <PostListItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onImportant={() => onImportant(id)}
                        onCompleted={() => onCompleted(id)}/>
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