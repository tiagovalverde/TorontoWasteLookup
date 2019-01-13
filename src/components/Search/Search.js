import React, { Component } from 'react';
import './Search.scss';
import sprite from '../../assets/icons/sprite.svg';

class Search extends Component {

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Insert a keyword"
                    className="search-input"
                    value={this.props.query}
                    onChange={this.props.changed}
                    onKeyPress={this.props.keyPressed}
                />
                <button
                    className="search-btn"
                    onClick={this.props.clicked
                    }>
                    <svg className="search-btn__svg">
                        <use xlinkHref={sprite + '#icon-search'}></use>
                    </svg>
                </button>
            </div>
        );
    }
}

export default Search;