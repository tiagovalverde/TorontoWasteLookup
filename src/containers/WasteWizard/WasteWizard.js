import React, { Component } from 'react';
import './WasteWizard.scss';
import Search from '../../components/Search/Search';
import WasteList from '../../components/WasteList/WasteList';
import WasteFavourites from '../../components/WasteFavourites/WasteFavourites';
import axios from '../../services/axios-wasteLookup';

class WasteWizard extends Component {

    state = {
        lookupData: [],
        searchQuery: '',
        searchResults: []
    }

    componentDidMount() {
        axios.get('')
            .then((response) => {
                let lookupData = response.data.map((item) => {
                    return {
                        ...item,
                        favourite: false
                    }
                })
                this.setState({ lookupData: lookupData })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    queryChangeHandler(event) {
        if (event.target.value === '') {
            this.setState({ searchResults: [] })
        }
        this.setState({ searchQuery: event.target.value });
    }

    searchLookupDataHandler(event) {
        let lookupDataCopy = this.state.lookupData;
        let searchResults = lookupDataCopy.filter((item) => {
            return item.title.includes(this.state.searchQuery) || item.keywords.includes(this.state.searchQuery);
        }).map((item) => {
            return {
                title: item.title,
                body: item.body,
                favourite: item.favourite
            }
        });
        this.setState({ searchResults: searchResults });
    }

    keyPressHandler(event) {
        if (event.key === 'Enter') {
            this.searchLookupDataHandler();
        }
    }

    addToFavouritesHandler = (wasteItem) => {
        if (!wasteItem.favourite) {
            this.updateLookupData(true, wasteItem);
            this.updateQueryResultsData(true, wasteItem);
        }
    }

    removeFromFavouritesHandler = (wasteItem) => {
        this.updateLookupData(false, wasteItem);
        this.updateQueryResultsData(false, wasteItem);
    }

    updateLookupData(isFavourite, wasteItem) {
        let lookupDataCopy = [...this.state.lookupData];
        let lookupDataUpdated = lookupDataCopy.map((item) => {
            if (item.title === wasteItem.title) {
                return {
                    title: item.title,
                    body: item.body,
                    category: item.category,
                    favourite: isFavourite,
                    keywords: item.keywords,
                }
            } else {
                return item;
            }
        })
        this.setState({ lookupData: lookupDataUpdated });
    }

    updateQueryResultsData(isFavourite, wasteItem) {
        let queryResultsCopy = [...this.state.searchResults];
        let queryResultsUpdated = queryResultsCopy.map((item) => {
            if (item.title === wasteItem.title) {
                return {
                    title: item.title,
                    body: item.body,
                    category: item.category,
                    favourite: isFavourite,
                    keywords: item.keywords,
                }
            } else {
                return item;
            }
        });
        this.setState({ searchResults: queryResultsUpdated });
    }

    filterFavourites() {
        let favourites = this.state.lookupData.filter((item) => {
            return item.favourite === true;
        })
        return favourites;
    }

    render() {
        let favourites = this.filterFavourites();

        return (
            <div className="WateWizard">
                <Search
                    query={this.state.searchQuery}
                    changed={(event) => this.queryChangeHandler(event)}
                    clicked={(event) => this.searchLookupDataHandler(event)}
                    keyPressed={(event) => this.keyPressHandler(event)}
                />
                <WasteList
                    addToFavourites={this.addToFavouritesHandler}
                    wasteResults={this.state.searchResults}
                />
                <WasteFavourites
                    removeFromFavourites={this.removeFromFavouritesHandler}
                    wasteFavourites={favourites}
                />
            </div>
        );
    }
}

export default WasteWizard;