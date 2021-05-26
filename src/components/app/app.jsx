import React, {Component} from "react";
import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import PostStatusFilter from "../post-status-filter/post-status-filter.jsx";
import PostList from "../post-list/post-list.jsx";
import PostAddForm from "../post-add-form/post-add-form.jsx";

const App = () => (
    <div className="container">
        <AppHeader />
        <div className="search-wrapper">
            <SearchPanel />
            <PostStatusFilter />
        </div>
        <PostList />
        <PostAddForm />
    </div>
);

export default App;