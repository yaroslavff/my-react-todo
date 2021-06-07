import React, {Component} from "react";

class SearchPanel extends Component {
    
    constructor(props) {
        super(props);
    }

    changeSearchParams = (e) => {
        const newSearch = e.target.value;
        this.props.updateSearch(newSearch);
    }

    render() {
        return (
            <input
                className="search-wrapper__panel panel"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.changeSearchParams}
            />
        );
    }
};

export default SearchPanel;