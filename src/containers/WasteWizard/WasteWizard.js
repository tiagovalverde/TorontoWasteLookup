import React, { Component } from 'react';
import './WasteWizard.scss';
import Search from '../../components/Search/Search';
import WasteList from '../../components/WasteList/WasteList';
import WasteFavourites from '../../components/WasteFavourites/WasteFavourites';

class WasteWizard extends Component {

    state = {
        lookupData: [],
        search: {
            query: '',
            results: []
        },
        favourites: []
    }

    componentDidMount() {
        // axios api call
        //store in lookupData
    }

    searchLookupDataHandler(query) { }
    addToFavouritesHandler(id) { }
    removeFromFavouritesHandler(id) { }

    render() {
        return (
            <div className="WateWizard">
                <Search />
                <WasteList />
                <WasteFavourites />

            </div>
        );
    }
}

export default WasteWizard;