import React, { Component } from 'react';
import './WasteFavourites.scss';
import Wasteitem from '../WasteItem/Wasteitem';

class WasteFavourites extends Component {

    //check if favorites saved ?????

    render() {
        return (
            <div className="wasteFavourites">
                <h2 className="wasteFavourites-title">Favourites</h2>
                <Wasteitem />
            </div>
        );
    }
}

export default WasteFavourites;