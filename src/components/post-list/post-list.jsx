import React from "react";

import PostListItem from "../post-list-item/post-list-item.jsx";

const PostList = () => {
    return (
        <ul className="list">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    );
};

export default PostList;