import React from "react";

const PostAddForm = (props) => {

    const {deleteAll, createNewPost} = props;

    return (
        <div className="post-add">
            <input
            type="text"
            placeholder="О чем сегодня думаете?"
            className="post-add__panel panel"/>
            <div className="btn-group">
                <button
                    type="submit"
                    className="post-add__btn"
                    onClick={() => createNewPost("New Post!")}
                >Добавить</button>
                <button
                    type="button"
                    className="post-add__btn-delete btn"
                    onClick={() => deleteAll()}
                >Удалить все</button>
            </div>
        </div>
    );
};

export default PostAddForm;