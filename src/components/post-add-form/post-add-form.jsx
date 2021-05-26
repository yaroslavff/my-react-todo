import React from "react";

const PostAddForm = () => {
    return (
        <div className="post-add">
            <input
            type="text"
            placeholder="О чем сегодня думаете?"
            className="post-add__panel panel"/>
            <div className="btn-group">
                <button
                type="submit"
                className="post-add__btn">
                    Добавить
                </button>
                <button
                type="button"
                className="post-add__btn-delete btn">
                    Удалить все
                </button>
            </div>
        </div>
    );
};

export default PostAddForm;