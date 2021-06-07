import React, {Component} from "react";

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onValueChange = (e) => {
        this.setState(({text}) => ({
            text: e.target.value
        }));
    }

    render() {

        const {deleteAll, createNewPost} = this.props;
        const {text} = this.state;

        return (
            <form
                className="post-add"
                onSubmit={(e) => {
                    e.preventDefault();
                    createNewPost(text)
                    this.setState({
                        text: ""
                    })
                }}>
                <input
                type="text"
                placeholder="О чем сегодня думаете?"
                className="post-add__panel panel"
                onChange={this.onValueChange}
                value={text}/>
                <div className="btn-group">
                    <button
                        type="submit"
                        className="post-add__btn">
                        Добавить</button>
                    <button
                        type="button"
                        className="post-add__btn-delete btn"
                        onClick={() => deleteAll()}>
                        Удалить все</button>
                </div>
            </form>
        );
    }
};