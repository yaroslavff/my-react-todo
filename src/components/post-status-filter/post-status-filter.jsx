import React from "react";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn-group__all search-btn search-btn_active">Все</button>
            <button className="btn-group__favourite search-btn">Важные</button>
            <button className="btn-group__completed search-btn">Выполненные</button>
        </div>
    );
};

export default PostStatusFilter;