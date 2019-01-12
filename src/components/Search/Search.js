import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {

    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Insert a keyword" className="search-input" />
                <button className="search-btn">P</button>
            </div>
        );
    }
}

export default Search;