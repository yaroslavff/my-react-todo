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

        const {burgerMenu} = this.props;

        return (
            <>
                <button 
                    className="search-wrapper__close"
                    onClick={burgerMenu}/>
                <span className="btn-header">Поиск:</span>
                <input
                    className="search-wrapper__panel panel"
                    type="text"
                    placeholder="Что будем искать?"
                    onChange={this.changeSearchParams} />
            </>
        );
    }
};

export default SearchPanel;