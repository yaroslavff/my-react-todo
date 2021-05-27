import React from "react";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn-group__all btn-group_active js-btn-search">Все</button>
            <button type="button" className="btn-group__favourite btn js-btn-search">Важные</button>
            <button type="button" className="btn-group__completed btn js-btn-search">Выполненные</button>
        </div>
    );
};

export default PostStatusFilter;