import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import Burger from "../burger-menu/burger-menu";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: [
                {label: "Hello World!", important: false, completed: false, id: this.createRandomData()},
                {label: "Second String.", important: false, completed: false, id: this.createRandomData()},
                {label: "The End...", important: false, completed: false, id: this.createRandomData()}
            ],
            filter: "",
            search: "",
            burger: false
        };
    }

    createRandomData = () => {
        let textData = "";
        let variables = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < 20; i++) {
            textData += variables.charAt(Math.floor(Math.random() * variables.length));
        }

        return textData;
    }

    onChangeItem = (id, prop = false) => {
        this.setState(({info}) => {
            const index = info.findIndex(item => item.id === id);
            
            const before = info.slice(0, index);
            const after = info.slice(index + 1);

            if (!prop) {
                const newInfo = [...before, ...after];
                
                return {
                    info: newInfo
                }

            } else {
                const newItem = {...info[index], [prop]: !info[index].[prop]}
    
                const newArr = [...before, newItem, ...after]
    
                return {
                    info: newArr
                }
            }
        })
    }

    deleteItem = (id) => {
        this.onChangeItem(id);
    }

    onToggleImportant = (id) => {
        this.onChangeItem(id, "important")
    }

    onToggleCompleted = (id) => {
        this.onChangeItem(id, "completed")
    }

    deleteAll = () => {
        this.setState(() => ({info: []}));
    }

    addPost = (label) => {
        this.setState(({info}) => {
            if (label) {
                const post = {label: label, id: this.createRandomData()}
                const newInfo = [...info, post];
                return {
                    info: newInfo
                }
            } else {
                return {
                    info: info
                }
            }
        });
    }

    goSearchPosts = (data, searchValue) => {
        if (searchValue.length === 0) {
            return data;
        }

        return data.filter(item => item.label.indexOf(searchValue) > -1);
    }

    updateSearch = (searchItem) => {
        this.setState(() => ({
            search: searchItem
        }));
    }

    postFilter = (data, filter) => {
        switch(filter) {
            case "important":
                return data.filter(item => item.important);
            case "completed":
                return data.filter(item => item.completed);
            default:
                return data;
        }
    }

    updateFilter = (filterItem) => {
        this.setState(() => ({
            filter: filterItem
        }));
    }

    toggleBurgerMenu = () => {
        if (!this.state.burger) {
            this.setState({burger: true});
        } else {
            this.setState({burger: false});
        }
    }

    render() {

        const {info, search, filter, burger} = this.state;

        let allPostsCounter, importantCounter, completedCounter;

        allPostsCounter = info.length;
        importantCounter = info.filter(item => item.important).length;
        completedCounter = info.filter(item => item.completed).length;

        let visiblePosts = this.postFilter(this.goSearchPosts(info, search), filter)

        const asideSearch = burger ? <Burger toggleBurgerMenu={this.toggleBurgerMenu} /> : <SearchView toggleBurgerMenu={this.toggleBurgerMenu} updateSearch={this.updateSearch} updateFilter={this.updateFilter}/>;


        return (
            <>
                <div className="search-wrapper">
                    {asideSearch}
                </div>
                <div className="app">
                    <AppHeader 
                        all={allPostsCounter}
                        important={importantCounter}
                        completed={completedCounter}/>
                    <PostAddForm
                        deleteAll={this.deleteAll}
                        createNewPost={this.addPost}
                    />
                    <PostList
                        posts={visiblePosts}
                        onDelete={this.deleteItem}
                        onImportant={this.onToggleImportant}
                        onCompleted={this.onToggleCompleted}
                    />
                </div>
            </>
        );
    }
};

const SearchView = (props) => {

    const {toggleBurgerMenu, updateSearch, updateFilter} = props;

    return (
        <div className="search-wrapper__content">
            <SearchPanel
                burgerMenu={toggleBurgerMenu}
                updateSearch={updateSearch}/>
            <PostStatusFilter 
                updateFilter={updateFilter}/>
        </div>
    )
}