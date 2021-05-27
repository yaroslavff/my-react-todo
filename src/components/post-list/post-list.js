import React from "react";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts}) => {

    const element = posts.map((item) => {
        return (
            <li className="list-item" key={item.id} data-list={item.id}>
                <PostListItem label={item.label}/>
            </li>
        );
    });

    return (
        <ul className="list">
            {element}
        </ul>
    );
};

export default PostList;