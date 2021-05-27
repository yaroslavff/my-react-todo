import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const App = () => {

    const createRandomData = () => {
        let textData = "";
        let variables = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < 20; i++) {
            textData += variables.charAt(Math.floor(Math.random() * variables.length));
        }

        return textData;
    };



    const info = [
        {label: "Hello World!", id: createRandomData()},
        {label: "Second String.", id: createRandomData()},
        {label: "The End...", id: createRandomData()}
    ];

    return (
        <div className="container">
            <AppHeader />
            <div className="search-wrapper">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={info}/>
            <PostAddForm />
        </div>
    );
};

export default App;