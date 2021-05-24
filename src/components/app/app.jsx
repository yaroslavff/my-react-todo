import React, {Component} from "react";
import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import PostStatusFilter from "../post-status-filter/post-status-filter.jsx";

const App = () => (
    <div className="container">
        <AppHeader />
        <div className="search-panel-wrapper">
            <SearchPanel />
            <PostStatusFilter />
        </div>
    </div>
);

export default App;