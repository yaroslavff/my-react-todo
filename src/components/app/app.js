import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: [
                {label: "Hello World!", id: this.createRandomData()},
                {label: "Second String.", id: this.createRandomData()},
                {label: "The End...", id: this.createRandomData()}
            ]
        }
    }

    createRandomData = () => {
        let textData = "";
        let variables = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < 20; i++) {
            textData += variables.charAt(Math.floor(Math.random() * variables.length));
        }

        return textData;
    }

    deleteItem = (id) => {
        this.setState(({info}) => {
            const i = info.findIndex(obj => obj.id === id);

            const before = info.slice(0, i);
            const after = info.slice(i + 1);

            const newInfo = [...before, ...after];
            
            return {
                info: newInfo
            }
        });
    }

    deleteAll = () => {
        this.setState(() => ({info: []}));
    }

    addPost = (label) => {
        this.setState(({info}) => {
            const post = {label: label, id: this.createRandomData()}
            const newInfo = [...info, post];
            return {
                info: newInfo
            }
        });
    }

    render() {

        const {info} = this.state;

        return (
            <div className="app">
                <AppHeader />
                <PostAddForm
                    deleteAll={this.deleteAll}
                    createNewPost={this.addPost}
                />
                <PostList
                    posts={info}
                    onDelete={this.deleteItem}
                />
                <div className="search-wrapper">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
            </div>
        );
    }
};